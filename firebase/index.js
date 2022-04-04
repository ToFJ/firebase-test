import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl7dQnOGqXf2BRiKZVscoMTP3eZ76y95U",
  authDomain: "next-firebase-test-57a3a.firebaseapp.com",
  projectId: "next-firebase-test-57a3a",
  storageBucket: "next-firebase-test-57a3a.appspot.com",
  messagingSenderId: "76316631120",
  appId: "1:76316631120:web:6a12538395ffa2b802b155",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
