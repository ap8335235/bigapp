import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


export const config= {
    apiKey: "AIzaSyBwSlxytYWnEUObywWww-gfJltNZZfMCW8",
    authDomain: "crwn-clothing-caf63.firebaseapp.com",
    databaseURL: "https://crwn-clothing-caf63.firebaseio.com",
    projectId: "crwn-clothing-caf63",
    storageBucket: "crwn-clothing-caf63.appspot.com",
    messagingSenderId: "941468636292",
    appId: "1:941468636292:web:1b08d2317b0d4db91b5ed1",
    measurementId: "G-LY4N0D72Q6"
  };

  export const createUserProfileDocument= async(userAuth,additionalData)=>{
      if(!userAuth) return;

       const userRef=firestore.doc(`users/${userAuth.uid}`);

       const snapShot= await userRef.get();

      if(!snapShot.exists){
          const { displayName,email} = userAuth;
          const createdAt= new Date();

          try{
        await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData
        });
          }catch(err) {
    console.log('error creating user',err.message);
          }
      }
      return userRef;
  };



firebase.initializeApp(config);
  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  };
  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  export default firebase;