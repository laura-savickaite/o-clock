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

    }

        let button = document.getElementById('buttonMinuteur');

        var timesUp
        var timeBis 

        button.addEventListener('click', function(event){
            event.preventDefault();


            if(button.dataset.switch == "on"){

                if (timeBis !== undefined){
                    var time = timeBis
                }
                else 
                {
                    var heureValue = parseInt(heureInput.value);
                    var minValue = parseInt(minuteInput.value);
                    var secValue = parseInt(secondsInput.value);
        
                    minValue = minValue * 60;
                    heureValue = heureValue * 3600;
        
                    
                    var time = parseInt(heureValue + minValue + secValue);                     
                }


                delete button.dataset.switch

                //méthode js qui permet d'exécuter le code à intervalle (toutes les secondes je vais lancer cette fx), ne pas confondre avec settimeout qui LANCE la fx après un laps de temps
                timesUp = setInterval(timer, 1000);
            }
            else 
            {

                clearInterval(timesUp)
                
                var newTime = numbersDiv.innerHTML

                newTime = newTime.split(':')

                var h = parseInt(newTime[0])
                var m = parseInt(newTime[1])
                var s = parseInt(newTime[2])

                m = m * 60;
                h = h * 3600;


                timeBis = parseInt(h + m + s); 

                button.dataset.switch = "on"
            }


            function timer() 
            {      

                var hours = parseInt(time / 3600, 10)
                var minutes = parseInt(time % 3600 / 60, 10)
                var seconds = parseInt(time % 3600 % 60, 10)
                
                //à transformer en f(x) pck je la réutilise svt
                hours = (hours < 10) ? '0' + hours : hours;
                minutes = (minutes < 10) ? '0' + minutes : minutes;
                seconds = (seconds < 10) ? '0' + seconds : seconds;   

                let days = Math.floor(hours / 24)

                if (days >= 1) {
                    let daysTimer = document.createElement('div')
                    daysTimer.classList.add('daysTimer')
                    daysTimer.innerText = '+ ' + days + ' day(s)'
                    numbersDiv.appendChild(daysTimer)
                } 

                if(time == 0){
                    clearInterval(timesUp)
                    let timesUpSound = new Audio('sounds/alarm.wav');
                    timesUpSound.play();
                }
                else 
                {
                time--   
                }

                numbersDiv.innerHTML = "";  
                numbersDiv.innerText = hours + ":" + minutes + ":" + seconds
            }
        }) 
    
    minuteur();













/////////////////////////////////

         // CHRONOMETRE

/////////////////////////////////


let chronometre = document.getElementById('chrono');
let buttonChrono = document.getElementById('buttonChrono');
let timeChrono = document.getElementsByTagName('time');
let buttonReset = document.getElementById('resetChrono');
let buttonTour = document.getElementById('tourChrono');

var timesRunning;
var timePaused;
var addTours;


buttonChrono.addEventListener('click', function(event){
    event.preventDefault();

    if(button.dataset.switch == "on"){

        if(timePaused !== undefined)
        {
            var timePlus = timePaused;
        }
        else
        {
            var secondsChrono = 0;
            var minutesChrono = 0;
            var hoursChrono = 0;
         
            minutesChrono = minutesChrono * 60;
            hoursChrono = hoursChrono * 3600;
         
            var timePlus = secondsChrono + minutesChrono + hoursChrono;
        }

        timesRunning = setInterval(chronometer, 1000);
        delete button.dataset.switch;
    }
    else 
    {
        clearInterval(timesRunning);
        
        let timePause = timeChrono[0].innerHTML;
        timePause = timePause.split(':');

        var newHour = timePause[0];
        var newMinute = timePause[1];
        var newSecond = timePause[2];

        newMinute = newMinute * 60;
        newHour = newHour * 3600;

        timePaused = parseInt(newHour + newMinute + newSecond);
        
        button.dataset.switch = "on";
    }


    buttonTour.addEventListener('click', function(event){
        event.preventDefault();

        var hours = parseInt(timePlus / 3600, 10)
        var minutes = parseInt(timePlus % 3600 / 60, 10)
        var seconds = parseInt(timePlus % 3600 % 60, 10)

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;       


        addTours = document.createElement('div')
        addTours.classList.add('tours')
        addTours.innerText = hours + ":" + minutes + ":" + seconds;
        chronometre.appendChild(addTours)

    })


    buttonReset.addEventListener('click', function(event){
        event.preventDefault();
    
        clearInterval(timesRunning);

        timeChrono[0].innerHTML = '00:00:00'; 
        timePlus = 0;
        timePaused = 0;

        addTours.innerText = '';
        chronometre.removeChild(addTours)
        
        button.dataset.switch = "on";
    })


   function chronometer(){

    timePlus++;  
    
    hoursChrono = parseInt(timePlus / 3600, 10);
    minutesChrono = parseInt(timePlus % 3600 / 60, 10);
    secondsChrono = parseInt(timePlus % 3600 % 60, 10);

    hoursChrono = (hoursChrono < 10) ? '0' + hoursChrono : hoursChrono;
    minutesChrono = (minutesChrono < 10) ? '0' + minutesChrono : minutesChrono;
    secondsChrono = (secondsChrono < 10) ? '0' + secondsChrono : secondsChrono;   

    timeChrono[0].innerHTML = hoursChrono + ':' + minutesChrono + ':' + secondsChrono;
  }
    
})



})