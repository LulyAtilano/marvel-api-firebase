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

    $('#login').click(function (){
        console.log('boton clickeado login');
        var email = $('#email').val();
        var password = $('#password').val();
        //console.log(email,password);

        firebase.auth().signInWithEmailAndPassword(email,password)
        .catch( function(error) {
            alert(error.message);
        });
    });

    $('#logout').click(function (){
        console.log("boton logout clickeado");
        firebase.auth().signOut();
    });

    $('#signup').click(function (){
        console.log('boton clickeado signup');
        var email = $('#email').val();
        var password = $('#password').val();
        //console.log(email,password);

        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch( function(error) {
            alert(error.message);
        });
    });

    firebase.auth().onAuthStateChanged(function(user){
        console.log("checking login state");
        if (user) { 
            console.log("logged in");
            $('#user').text(user.email);
            console.log(user);
            window.location="app.html";
        } else {
            console.log("logged out");
            $('#user').text("");
        }
    });

});