import * as firebase from 'firebase'
import { useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyChd0Zlvy_HRdp5I-ei9Hku9FkRPGHL7WY",
    authDomain: "user-auth-d86a2.firebaseapp.com",
    projectId: "user-auth-d86a2",
    storageBucket: "user-auth-d86a2.appspot.com",
    messagingSenderId: "52848907677",
    appId: "1:52848907677:web:323fc441aa10b1d6ffcb74"
  };

/*if (!firebase.default.apps.length) {
    firebase.default.initializeApp({firebaseConfig});
 }else {
    firebase.default.app(); // if already initialized, use that one
 }*/

 //firebase.default.initializeApp(firebaseConfig);

 !firebase.default.apps.length ? firebase.default.initializeApp(firebaseConfig) : firebase.default.app()

export async function registerUser(email: string, password: string) {

    try{
        const result = await firebase.default.auth().createUserWithEmailAndPassword(email, password);
        return true;
    } catch(error){
        alert(error.message);
        return false;
    }
    
}

export async function loginUser(email: string, password: string) {
    
    try{
        const result = await firebase.default.auth().signInWithEmailAndPassword(email, password);
        return true;
    } catch(error){
        alert(error.message);
        return false;
    }
}
