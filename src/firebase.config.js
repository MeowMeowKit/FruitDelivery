import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
   apiKey: "AIzaSyCtJsF09wVl8_3zXxqaiqIu72SEMDElJaE",
   authDomain: "fruitdelivery-441a7.firebaseapp.com",
   databaseURL:
      "https://fruitdelivery-441a7-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "fruitdelivery-441a7",
   storageBucket: "fruitdelivery-441a7.appspot.com",
   messagingSenderId: "302439995241",
   appId: "1:302439995241:web:86c8cad98a7ded45834ff8",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
