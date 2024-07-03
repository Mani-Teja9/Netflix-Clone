import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB6KFLimw0AXL70n-Ddx2lVnef4cq7_NAE",
  authDomain: "netflix-clone-513eb.firebaseapp.com",
  projectId: "netflix-clone-513eb",
  storageBucket: "netflix-clone-513eb.appspot.com",
  messagingSenderId: "546730521273",
  appId: "1:546730521273:web:b505971dda7a0d3987e168"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()
const database = getFirestore(app);
export { database };