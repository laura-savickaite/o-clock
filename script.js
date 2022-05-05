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

        
        //lorsque je clique sur le bouton


        // var counter = 0

        // if(counter % 2){
        //     button.dataset.switch = 'on';
        //     console.log(button.dataset.switch)
        // }
        // else
        // {
        //     button.dataset.switch = '';
        //     console.log(button.dataset.switch)
        // }

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

                timesUp = setInterval(timer, 1000);
            }
            else 
            {

                clearInterval(timesUp)
                
                var newTime = numbersDiv.innerHTML

                newTime = newTime.split(':')
                // test[1] = test[1] * 60
                // test[0] = test[0] * 3600

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
                // console.log(hours);
                var minutes = parseInt(time % 3600 / 60, 10)
                // console.log(minutes);
                var seconds = parseInt(time % 3600 % 60, 10)
                // console.log(seconds);
                
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

            //méthode js qui permet d'exécuter le code à intervalle (toutes les secondes je vais lancer cette fx), ne pas confondre avec settimeout qui LANCE la fx après un laps de temps
            
  
        }) 
    
    minuteur();



})