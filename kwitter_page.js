//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code

      console.log(message_data);
      console.log(firebase_message_id);
      like=message_data['like'];
      message=message_data['message'];
      var name=message_data['name'];
      name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'> </h4>";
      message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
      like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span> </button> <hr>";
      row=name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("no. of likes:"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });


}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}



function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name,
                  message:msg,
                  like:0
            }


      );
      document.getElementById("msg").value="";


}


