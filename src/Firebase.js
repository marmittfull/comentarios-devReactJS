import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyCiYsb3XQH9Tk0hh5Wsw7y2gsrK6PpY3NM",
  authDomain: "comments-tiago.firebaseapp.com",
  databaseURL: "https://comments-tiago.firebaseio.com",
  projectId: "comments-tiago",
  storageBucket: "comments-tiago.appspot.com",
  messagingSenderId: "779209908125",
  appId: "1:779209908125:web:9b9cc16d876711a0fc9974",
  measurementId: "G-TV891T9Z6D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();