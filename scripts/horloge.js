document.addEventListener('DOMContentLoaded', function loaded() {

    "use strict";


/////////////////////////////

         // HORLOGE

/////////////////////////////

function horloge () {

    let date = new Date(); 
    // console.log(date);  

    //.getHours permet d'extraire l'heure
    let heure = date.getHours(); 
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    // opérateur conditionel ternaire :
        // -> si (heure < 10), si cela est vrai alors tu rajoutes 0 devant l'heure SINON (:) si cela est faux tu mets juste l'heure

    heure = (heure < 10) ? '0' + heure : heure;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    secondes = (secondes < 10) ? '0' + secondes : secondes;


    let clock = heure + ':' + minutes + ':' + secondes;

    let horlogeContainer = document.getElementById('horloge');
    horlogeContainer.innerHTML = clock;

    // setTimeout(function, milliseconds, param1, param2, ...) -> lance une fonction après X millisecondes, vu qu'on veut l'update toutes les secondes : on met 1000ms (= 1s) 
    let time = setTimeout(function(){ horloge() }, 1000);  
    // console.log(time) 
}

horloge();

})