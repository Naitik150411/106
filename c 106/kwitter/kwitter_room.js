
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAT3fZhIM4BnQaNkkqBLv5sR0-V4qD9MVY",
      authDomain: "class-test-b5f0e.firebaseapp.com",
      databaseURL: "https://class-test-b5f0e-default-rtdb.firebaseio.com",
      projectId: "class-test-b5f0e",
      storageBucket: "class-test-b5f0e.appspot.com",
      messagingSenderId: "917094650611",
      appId: "1:917094650611:web:15d36f42237670d94d1d86"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+     Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";

      
}

function logout ()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
     window.location=("index.html")
}


function addRoom()
{
    room_name=document.getElementById("room_name").value;
     
    firebase.database().ref("/").child(room_name).update({
        purpose:"addiing room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}

