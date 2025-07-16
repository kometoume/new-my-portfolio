// src/lib/firebase.ts

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, // ★ここを修正★
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, // ★ここを修正★
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, // ★ここを修正★
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, // ★ここを修正★
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, // ★ここを修正★
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID, // ★ここを修正★
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, // ★ここを修正★
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);