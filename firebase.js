// import * as firebase from "firebase";

import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {  getReactNativePersistence } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnNCzPhPB4ZDwEkhbXmmJVQGt7J9TqagQ",
    authDomain: "first-project-53335.firebaseapp.com",
    projectId: "first-project-53335",
    storageBucket: "first-project-53335.appspot.com",
    messagingSenderId: "92298089452",
    appId: "1:92298089452:web:f817666c1686ea981b66c9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
    

  export {auth};