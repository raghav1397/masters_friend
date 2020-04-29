import json
import requests
import numpy as np
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
from scorers import get_score, get_lor_score, get_sop_resume_score

app = Flask(__name__)
api = Api(app)
CORS(app)
parser = reqparse.RequestParser()

class Warmup(Resource):
    def get(self):
        # Handle your warmup logic here, e.g. set up a database connection pool
        return '', 200, {}

class MastersFriendB2(Resource):
    def post(self):
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
        parser.add_argument('univ')
        parser.add_argument('resume')
        parser.add_argument('sop')

        # Retrieve post request values
        args = parser.parse_args()
        gre = float(args['gre'])
        toefl= float(args['toefl'])
        grade = float(args['grade'])
        email = args['email']
        uid = args['uid']
        work_ex = float(args['work_ex'])
        lor1 = int(args['lor1'].split("\'value\'")[1][3]) if "{" in args['lor1'] else -1
        lor2 = int(args['lor2'].split("\'value\'")[1][3]) if "{" in args['lor2'] else -1
        lor3 = int(args['lor3'].split("\'value\'")[1][3]) if "{" in args['lor3'] else -1
        lor4 = int(args['lor4'].split("\'value\'")[1][3]) if "{" in args['lor4'] else -1

        if toefl<10:
            if toefl<=4:
                toefl=31.
            elif toefl<=4.5:
                toefl=34.
            elif toefl<=5:
                toefl=45.
            elif toefl<=5.5:
                toefl=59.
            elif toefl<=6:
                toefl=78.
            elif toefl<=6.5:
                toefl=93.
            elif toefl<=7:
                toefl=101.
            elif toefl<=7.5:
                toefl=109.
            elif toefl<=8:
                toefl=114.
            elif toefl<=8.5:
                toefl=117.
            else:
                toefl=120

        univ = args['univ']
        print(univ)
        resume = np.array(args['resume'])
        sop = args['sop']

        s1 = 0.8*get_score(gre, toefl, work_ex, grade, univ)
        s2 = 0.1*get_sop_resume_score(resume, sop)
        s3 = 0.1*get_lor_score(lor1, lor2, lor3, lor4)

        print(s1,s2,s3)

        total_score = s1+s2+s3

        return {'univ':univ,'score':total_score}

api.add_resource(MastersFriendB2, '/')
api.add_resource(Warmup, '/_ah/warmup')

if __name__ == '__main__':
    app.run(port=5001)