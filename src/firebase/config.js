import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB_pum1PzhgOg2AxOWn7v7bhBIHhQ8HsQE',
  authDomain: 'coffeedrop-df2d1.firebaseapp.com',
  databaseURL: 'https://coffeedrop-df2d1.firebaseio.com',
  projectId: 'coffeedrop-df2d1',
  storageBucket: 'coffeedrop-df2d1.appspot.com',
  messagingSenderId: '559347140580',
  appId: '1:559347140580:android:be2d1839d60ec4b3c9e9f1',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({ experimentalForceLongPolling: true });
    instance = this;
  } else {
    console.log("firebase apps already running...")
  }

export { firebase };
