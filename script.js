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



/////////////////////////////

         // MINUTEUR

/////////////////////////////

    let numbersDiv = document.getElementById('numbersTimer');
    let heureInput = document.getElementById('hours');
    let minuteInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');


// la fonction va limiter le nb d'input que l'on peut rentrer
    function checkInputNb (typeInput){
        var ValueInput = typeInput.value;
        
        if(ValueInput.length < 3)
        {
            return true;
        }
        else
        {
            ValueInput = ValueInput.substring(0, ValueInput.length - 1);
            typeInput.value = ValueInput;
        }
    }




    function minuteur () {

        heureInput.addEventListener("keyup", function(){
            checkInputNb(heureInput);
        })

        minuteInput.addEventListener("keyup", function(){
            checkInputNb(minuteInput);
        })

        secondsInput.addEventListener("keyup", function(){
            checkInputNb(secondsInput);
        })

        let button = document.getElementById('buttonMinuteur');


        button.addEventListener('click', function(event){
            event.preventDefault();

            numbersDiv.innerHTML = "";

            let heureValue = parseInt(heureInput.value);
            let minValue = parseInt(minuteInput.value);
            let secValue = parseInt(secondsInput.value);

            minValue = minValue * 60;
            heureValue = heureValue * 3600;

            // console.log(secValue)
            // console.log(minValue)
            // console.log(heureValue)

            var time = parseInt(heureValue + minValue + secValue);

            function timer() {    
                let hours = parseInt(time / 3600, 10)

                let minutes = parseInt(time % 3600 / 60, 10)
                // console.log(minutes);
                let seconds = parseInt(time % 3600 % 60, 10)
                // console.log(seconds);

                numbersDiv.innerText = hours + ":" + minutes + ":" + seconds

                if(time == 0){
                    clearInterval(test)
                    var timesUp = new Audio('sounds/alarm.wav');
                    timesUp.play();
                }
                else 
                {
                  time--   
                }
              }

            //méthode js qui permet d'exécuter le code à intervalle (toutes les secondes je vais lancer cette fx), ne pas confondre avec settimeout qui LANCE la fx après un laps de temps

                var test = setInterval(timer, 1000);





            //à transformer en f(x) pck je la réutilise svt
            // heureValue = (heureValue < 10) ? '0' + heureValue : heureValue;
            // minValue = (minValue < 10) ? '0' + minValue : minValue;
            // secValue = (secValue < 10) ? '0' + secValue : secValue;

            // let minuteur = parseInt(heureValue) + ':' + parseInt(minValue) + ':' + parseInt(secValue);

            // minuteur --;

            // console.log(parseInt(heureValue));
            // console.log(parseInt(minValue));
            // console.log(parseInt(secValue));

            // setTimeout(timer(secValue), 1000)

            // console.log (numbersDiv)
            // console.log(minuteur)
        })

        
    }

    minuteur();
})