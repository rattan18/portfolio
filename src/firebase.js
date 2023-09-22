import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWqYqdo4WsoyodTR2g_6yGyAstc6IGHbY",
  authDomain: "rattan-portfolio.firebaseapp.com",
  projectId: "rattan-portfolio",
  storageBucket: "rattan-portfolio.appspot.com",
  messagingSenderId: "955144091458",
  appId: "1:955144091458:web:9b4e0caba17ae4310f3adb"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
