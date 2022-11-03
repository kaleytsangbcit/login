// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyCBxaalXOhpj5LxDIa7U1kmw2c6rxefutc",
//   authDomain: "login-with-firebase-1102.firebaseapp.com",
//   projectId: "login-with-firebase-1102",
//   storageBucket: "login-with-firebase-1102.appspot.com",
//   messagingSenderId: "111797970394",
//   appId: "1:111797970394:web:de8e04ff79d69086fd0ce3"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId
}; 

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);