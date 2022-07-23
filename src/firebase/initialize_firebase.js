import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhq2QI3JX6blni5bCgU93qGyuof5LmSWU",
  authDomain: "react-music-player-ae9d5.firebaseapp.com",
  projectId: "react-music-player-ae9d5",
  storageBucket: "react-music-player-ae9d5.appspot.com",
  messagingSenderId: "861062984054",
  appId: "1:861062984054:web:c954dd09edded04e994a57",
};

const initFirebase = async () => {
  try {
    const app = initializeApp(firebaseConfig);

    //Initialize Auth and get a reference to the service
    const auth = getAuth(app);

    //Initialize Realtime Database and get a reference to the service
    const db = getDatabase(app);
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default initFirebase;
