import firebase from 'firebase/compat/app';
import { getFirestore } from "@firebase/firestore";
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    databaseURL: `${process.env.REACT_APP_DATABASEURL}`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSAGESENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`
})



//export a var for authentication -> give us our authentication instance
export const auth = app.auth()
export const firestore = getFirestore(app);

//in order to use the app everywhere else we need to export
export default app