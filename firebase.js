var firebaseConfig = {
    apiKey: "AIzaSyDjxpbAlo9Qu2aN2sTiWPzOkl_AbBmFgX0",
    authDomain: "sample-f74a3.firebaseapp.com",
    projectId: "sample-f74a3",
    storageBucket: "sample-f74a3.appspot.com",
    messagingSenderId: "73794391459",
    appId: "1:73794391459:web:2858929dc11882654d1e16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()