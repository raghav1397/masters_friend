import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyBQokv7SWh03xXOKW4mHhdaI8rEyHzkAis",
  authDomain: "masters-273323.firebaseapp.com",
  databaseURL: "https://masters-273323.firebaseio.com",
  projectId: "masters-273323",
  storageBucket: "masters-273323.appspot.com",
  messagingSenderId: "136049144384",
  appId: "1:136049144384:web:02ac0c31787dedbbc365a5",
  measurementId: "G-0RL05VW1X5"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, facebookProvider };
