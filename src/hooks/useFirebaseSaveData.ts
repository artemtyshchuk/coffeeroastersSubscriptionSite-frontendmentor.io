import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const useFirebaseSaveData = () => {
  const [dataSendedSuccessfully, setDataSendedSuccessfully] = useState(false);
  const [dataNotSendedSuccessfully, setDataNotSendSuccessfully] =
    useState(false);
  const saveData = async (data: {
    preference: string;
    beanType: string;
    quantity: string;
    grindOption: string;
    delivery: string;
  }) => {
    const db = getDatabase();
    const randomId = Math.floor(Math.random() * 1000);
    const newUserRef = ref(db, "users/" + randomId);

    try {
      await set(newUserRef, data);
      console.log("Data saved successfully!");
      setDataSendedSuccessfully(true);
    } catch (error) {
      console.error("Error saving data: ", error);
      setDataNotSendSuccessfully(true);
    }
  };

  return { saveData, dataSendedSuccessfully, dataNotSendedSuccessfully };
};
