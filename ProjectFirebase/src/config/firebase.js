// Import the functions you need from the SDKs you need
import { getAuth } from "@react-native-firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtRWHiBlVGK8UD-BpoXps1NWDg_DDgMqU",
  authDomain: "fir-rn-c3d69.firebaseapp.com",
  projectId: "fir-rn-c3d69",
  storageBucket: "fir-rn-c3d69.firebasestorage.app",
  messagingSenderId: "872899965434",
  appId: "1:872899965434:web:08abb5c329a98c066d7443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)