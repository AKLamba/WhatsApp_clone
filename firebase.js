import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
// const firebaseConfig = {
//  // your config goes here
// };
const firebaseConfig = {
  apiKey: "AIzaSyDSeA2oDsTrisRRLERyipb6aAZbEQzwljA",
  authDomain: "clone-wa-1cfbc.firebaseapp.com",
  projectId: "clone-wa-1cfbc",
  storageBucket: "clone-wa-1cfbc.appspot.com",
  messagingSenderId: "496192761084",
  appId: "1:496192761084:web:ddda71add5b1fd4ca9fb79",
  measurementId: "G-50259SLBDQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
