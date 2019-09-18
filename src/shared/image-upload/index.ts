import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyBtkO-LDEX8pmKx1-e7r1rHvUkQ9XqM8Xs",
    authDomain: "tpa-web-auth.firebaseapp.com",
    databaseURL: "https://tpa-web-auth.firebaseio.com",
    projectId: "tpa-web-auth",
    storageBucket: "gs://tpa-web-auth.appspot.com",
    messagingSenderId: "628937983313",
    appId: "1:628937983313:web:3e053fb927765f6897bf70"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export{
    storage, firebase as default
}