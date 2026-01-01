import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWRMshM-lvyv-a87fVJApjkbA0IwsiRiI",
  authDomain: "campus-marketplace-be759.firebaseapp.com",
  projectId: "campus-marketplace-be759",
  storageBucket: "campus-marketplace-be759.firebasestorage.app",
  messagingSenderId: "1056157279146",
  appId: "1:1056157279146:web:8369cecb8fb3a6083e01d3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
