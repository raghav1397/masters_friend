import copy
import json
import fitz
import requests
import numpy as np
import pickle as pkl
from PIL import Image
from flask_cors import CORS
from operator import itemgetter
from google.cloud import storage
from multiprocessing.pool import Pool
from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)
CORS(app)
parser = reqparse.RequestParser()

class Warmup(Resource):
    def get(self):
        # Handle your warmup logic here, e.g. set up a database connection pool
        return '', 200, {}

class MastersFriendB1(Resource):
    def send_requests(self, data, u):
        data["univ"] = u
        print(data['univ'])
        txt = ""
        # return json.loads(requests.post('http://127.0.0.1:5001/', json=data).text)
        retires = 5
        t = 0
        success = False
        
        while t<retires and not success:
            r = requests.post('https://masters-backend-2.ue.r.appspot.com/', json=data)
            if r.ok:
                success = True
                txt = r.text
        return json.loads(txt)

    def post(self):
        try:
            # set up post request parameters
            parser.add_argument('gre')
            parser.add_argument('toefl')
            parser.add_argument('grade')
            parser.add_argument('email')
            parser.add_argument('uid')
            parser.add_argument('work_ex')
            parser.add_argument('lor1')
            parser.add_argument('lor2')
            parser.add_argument('lor3')
            parser.add_argument('lor4')

            # Setup google storage for access
            storage_client = storage.Client.from_service_account_json('key.json')
            bucket = storage_client.bucket('masters-273323.appspot.com')

            # Retrieve post request values
            args = parser.parse_args()

            gre = args['gre']
            toefl = args['toefl']
            grade = args['grade']
            email = args['email']
            uid = args['uid']
            work_ex = args['work_ex']
            lor1 = args['lor1']
            lor2 = args['lor2']
            lor3 = args['lor3']
            lor4 = args['lor4']


            # Retrieve resume and convert to image
            blob = bucket.blob('resume/'+uid+'/'+uid+'_resume.pdf')
            blob.download_to_filename('/tmp/resume.pdf')
            doc = fitz.open('/tmp/resume.pdf')
            mat = fitz.Matrix(fitz.Identity)
            resume = doc[0].getPixmap(alpha = False, matrix=mat)
            resume.writePNG("/tmp/resume.png")
            resume = np.array(Image.open('/tmp/resume.png'))
            print("Loaded resume")

            # Retrieve sop and extract text
            blob = bucket.blob('sop/'+uid+'/'+uid+'_sop.pdf')
            blob.download_to_filename('/tmp/sop.pdf')
            doc = fitz.open('/tmp/sop.pdf')
            pages = len(doc)
            sop = ""
            for page in range(pages):
                sop += doc[page].getText()
            print("Loaded sop")

            # Make calls to second backend for all universities
            data = {"gre":gre,"toefl":toefl,"grade":grade,"email":email,"uid":uid,"work_ex":work_ex,"lor1":lor1,"lor2":lor2,"lor3":lor3,"lor4":lor4}
            data["resume"] = resume.tolist()
            data["sop"] = sop
            universities = ["mit","neu","ncsu","utd","usc"]

            # Parallel requests
            pool = Pool(len(universities))
            async_result = [pool.apply_async(self.send_requests, (data, univ,)) for univ in universities]
            pool.close()
            pool.join()
            return_val = sorted([ar.get() for ar in async_result], key=itemgetter('score'), reverse=True)
            print(return_val)
            resp = {}
            for d in return_val:
                univ = d['univ']
                nd = copy.deepcopy(data)
                nd['score'] = d['score']
                resp[univ] = nd

            # rets = [self.send_requests(data,x,) for x in universities]
            # resp = {}
            # for i,u in enumerate(universities):
                # resp[u] = rets[i]
            return resp
        except Exception as e:
            print(e)
            return {}

api.add_resource(MastersFriendB1, '/')
api.add_resource(Warmup, '/_ah/warmup')

if __name__ == '__main__':
    app.run(port=5000)