var config = {
    apiKey: "AIzaSyAZnd1ceWjf515tW3M3B3_-V64Ys8AbavM",
    authDomain: "taller-firebase-marvel.firebaseapp.com",
    databaseURL: "https://taller-firebase-marvel.firebaseio.com",
    projectId: "taller-firebase-marvel",
    storageBucket: "taller-firebase-marvel.appspot.com",
    messagingSenderId: "826448222749"
};

firebase.initializeApp(config);

$(document).ready(function(){
    console.log('Pagina cargada');

    $('#logout').click(function(){
        console.log("boton logout clickeado");
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(function(user){
        console.log("checking login state");
        if (user) { 
            console.log("logged in");
            $('#user').text(user.email);
        } else {
            console.log("logged out");
            window.location="index.html";
        }
    });

});