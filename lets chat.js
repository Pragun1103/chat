var firebaseConfig = {
      apiKey: "AIzaSyDccOfFEu_0Gzg-1JK2rkl5_VGxrDX14R8",
      authDomain: "kwitterpage-a6f1e.firebaseapp.com",
      databaseURL: "https://kwitterpage-a6f1e-default-rtdb.firebaseio.com",
      projectId: "kwitterpage-a6f1e",
      storageBucket: "kwitterpage-a6f1e.appspot.com",
      messagingSenderId: "549140752493",
      appId: "1:549140752493:web:7a39ddda59ce028298f764"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="<h3> Welcome "+user_name+"! </h3>";
function Addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose :"adding Roomname"});
      
      localStorage.setItem("room_name",room_name);
      window.location="Let's Chat Web.html";
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;      
//End code
      });});}
getData();


function RedirectToRoomName(name){

      console.log(name);
localStorage.setItem("room_name", name);
window.location="Let's Chat Web.html";
}

function logout(){
      localStorage.removeItem("user_name");
     
      window.location="index.html";
}

