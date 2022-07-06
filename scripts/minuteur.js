document.addEventListener('DOMContentLoaded', function loaded() {

    "use strict";

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

            button.innerHTML = "stop"

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
            button.innerHTML = "on"

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

})