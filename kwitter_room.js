
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyApLDrQGJVh5W3ChTg0hPewIx4uEL4Czgo",
      authDomain: "kwitter-99b57.firebaseapp.com",
      databaseURL: "https://kwitter-99b57-default-rtdb.firebaseio.com",
      projectId: "kwitter-99b57",
      storageBucket: "kwitter-99b57.appspot.com",
      messagingSenderId: "392026452621",
      appId: "1:392026452621:web:dea43de38343c21c2ae8c4"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
            {
                  purpose:"adding user"
            }
      );
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name"+Room_names);
      row="<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location("kwitter_page.html");
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}




      