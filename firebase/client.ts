import {initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdhu0mWsDOQwuoCY5CLPsCHjiR--1K25Q",
  authDomain: "aiinterview-1d395.firebaseapp.com",
  projectId: "aiinterview-1d395",
  storageBucket: "aiinterview-1d395.firebasestorage.app",
  messagingSenderId: "702763348418",
  appId: "1:702763348418:web:3e0b6b2110dc3d84baa65b",
  measurementId: "G-NRH7T8S4GM"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);