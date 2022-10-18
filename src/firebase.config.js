import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAnPIeoC2jC-9FOP9qGlWss2rNc4TChj24",
    authDomain: "house-marketplace-app-74435.firebaseapp.com",
    projectId: "house-marketplace-app-74435",
    storageBucket: "house-marketplace-app-74435.appspot.com",
    messagingSenderId: "233920957411",
    appId: "1:233920957411:web:45cdd3639c63b457e92ed6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()