document.addEventListener('DOMContentLoaded', function loaded() {

    "use strict";

/////////////////////////////////

         // CHRONOMETRE

/////////////////////////////////


let chronometre = document.getElementById('chrono');
let buttonChrono = document.getElementById('buttonChrono');
let timeChrono = document.getElementsByTagName('time');
let buttonReset = document.getElementById('resetChrono');
let buttonTour = document.getElementById('tourChrono');
var listTours = document.createElement('ul')
chronometre.appendChild(listTours)

var timesRunning;
var timePaused;
var addTours;
var timePlus;


buttonChrono.addEventListener('click', function(event){
    event.preventDefault();


    if(buttonChrono.dataset.switch == "on"){

        buttonChrono.innerHTML = "pause";

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
        delete buttonChrono.dataset.switch;
    }
    else 
    {
        buttonChrono.innerHTML = "go";

        clearInterval(timesRunning);
        
        let timePause = timeChrono[0].innerHTML;
        timePause = timePause.split(':');

        var newHour = timePause[0];
        var newMinute = timePause[1];
        var newSecond = timePause[2];

        newMinute = newMinute * 60;
        newHour = newHour * 3600;

        timePaused = parseInt(newHour + newMinute + newSecond);
        
        buttonChrono.dataset.switch = "on";
    }


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


buttonTour.addEventListener('click', function tour(event){
    event.preventDefault();

    addTours = document.createElement('li')
    // addTours.classList.add('tours')
    addTours.innerText = timeChrono[0].innerHTML;
    listTours.appendChild(addTours)

})


buttonReset.addEventListener('click', function reset(event){
    event.preventDefault();

    clearInterval(timesRunning);

    timeChrono[0].innerHTML = '00:00:00'; 
    timePlus = 0;
    timePaused = 0;

    listTours.innerHTML = '';
    // chronometre.removeChild(listTours)

    buttonTour.removeEventListener('click', tour())
    
    buttonChrono.dataset.switch = "on";
})

})