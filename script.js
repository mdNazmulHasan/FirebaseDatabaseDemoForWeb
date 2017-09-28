

(function() {
    var output = document.getElementById("data");
    var config = {
      apiKey: "AIzaSyCSj-nrKjNy-2HuE4WQt6qeitVXk65vWrk",
      authDomain: "datatheft-4a40c.firebaseapp.com",
      databaseURL: "https://datatheft-4a40c.firebaseio.com",
      projectId: "datatheft-4a40c",
      storageBucket: "datatheft-4a40c.appspot.com",
      messagingSenderId: "199820593269"
    };
    firebase.initializeApp(config);
    var ref = firebase.app().database().ref().child('info');
  // DataSnapshot
  ref.on("value", function(snapshot){
    output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
});
})();
