// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app');

// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyCafGFY62Xw5LV2ikv0ALXp4GEmrXZUbgY',
  authDomain: 'helloworldclothes-app.firebaseapp.com',
  databaseURL: 'https://helloworldclothes-app.firebaseio.com',
  projectId: 'helloworldclothes-app',
  storageBucket: 'helloworldclothes-app.appspot.com',
  messagingSenderId: '250508679608',
  appId: '1:250508679608:web:e2a5fca24b356df386174d',
  measurementId: 'G-EJH44JV5SF'
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

$('#btn-login').click(() => {
  const email = $('#email').val();
  const password = $('#password').val();

  if (email != '' && password != '') {
    const result = firebase.auth().signInWithEmailAndPassword(email, password);

    result.catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      windows.alert('Message: ${errorMessage}');
    });
  } else {
    windowns.alert('Please fill out all fields');
  }
});
