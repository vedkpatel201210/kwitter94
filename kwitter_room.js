var username =  localStorage.getItem("user_name");
window.document.getElementById("userName").innerHTML = username;

const firebaseConfig = {
  apiKey: "AIzaSyAc3g5G8EMpd4bdRxsuXPJkhwblSxU7t2w",
  authDomain: "project-kwitter-7b076.firebaseapp.com",
  databaseURL: "https://project-kwitter-7b076-default-rtdb.firebaseio.com",
  projectId: "project-kwitter-7b076",
  storageBucket: "project-kwitter-7b076.appspot.com",
  messagingSenderId: "614406556012",
  appId: "1:614406556012:web:e9e15e08c970a48dadcb49",
  measurementId: "G-PZTH4Y311S"
};

firebase.initializeApp(firebaseConfig);

function addRoom(){
    var room_name = window.document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({purpose: "adding room"});
}

  