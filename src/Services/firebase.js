import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCmqVrELEXN7jbNxe0Fqluu7_EnN7NVkds",
  authDomain: "teste---vaga-de-dev.firebaseapp.com",
  databaseURL: "https://teste---vaga-de-dev-default-rtdb.firebaseio.com",
  projectId: "teste---vaga-de-dev",
  storageBucket: "teste---vaga-de-dev.appspot.com",
  messagingSenderId: "625234620257",
  appId: "1:625234620257:web:31844a7bc86008d2dd9f20"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);