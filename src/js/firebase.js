import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyA__Lo3IuZoAxGfmZBZwljNSqJ8Mf9or8o',
    authDomain: 'react-cms-2b41a.firebaseapp.com',
    databaseURL: 'https://react-cms-2b41a.firebaseio.com',
    projectId: 'react-cms-2b41a',
    storageBucket: 'react-cms-2b41a.appspot.com',
    messagingSenderId: '1089598421375'
  };

  firebase.initializeApp(config);

  export default firebase;
  export const database = firebase.database();