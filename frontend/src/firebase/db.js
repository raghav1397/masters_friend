//this is going to store Firebase realtime database API code
import { db } from "./firebase";

//##########3 user API

//create an user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  });

  export const doCreateFrom = ( username, email, first_name,last_name, grade,gre,work_ex,toefl,uid,lor1,lor2,lor3,lor4) =>
  db.ref(`forms/${uid}`).set({
    username,
    email,
    first_name,
    last_name,
    grade,
    gre,
    work_ex,
    toefl,
    uid,
    lor1,
    lor2,
    lor3,
    lor4
  });

//returns all users from firebase realtime db
export const onceGetUsers = () => db.ref("users").once("value");

export const doGetAnUnser = uid => db.ref(`users/${uid}`).once("value");

// other APIs could come below

export const doGetForm = uid => db.ref(`forms/${uid}`).once("value");