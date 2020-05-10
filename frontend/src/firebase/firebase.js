import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyAYDrJTLl_JFAck2p-fKqYr6RWJ4fFbj_w",
  authDomain: "mf-frontend.firebaseapp.com",
  databaseURL: "https://mf-frontend.firebaseio.com",
  projectId: "mf-frontend",
  storageBucket: "mf-frontend.appspot.com",
  messagingSenderId: "128421898211",
  appId: "1:128421898211:web:b044e2de47bc13b6dc22d6",
  measurementId: "G-R1TVNSDDPM"
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
