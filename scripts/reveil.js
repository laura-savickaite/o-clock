document.addEventListener('DOMContentLoaded', function loaded() {

    "use strict";


/////////////////////////////////

         // REVEIL

/////////////////////////////////

let selectHour = document.getElementById("hourSelect");
let selectMinutes = document.getElementById("minutesSelect");
let buttonSubmit = document.getElementById("buttonReveil");
let textarea = document.getElementById("nameReveil");
let tocome = document.getElementById("tocome");
let passed = document.getElementById("passed");

//pour les sélections d'heure/minutes

for(var i = 0; i<= 23; i++)
{
    i = (i < 10) ? '0' + i : i;

    var optionHour = document.createElement('option');
    optionHour.value = i;
    optionHour.innerHTML = i;
    selectHour.appendChild(optionHour);
}

for(var j = 0; j<= 59; j++)
{
    j = (j < 10) ? '0' + j : j;

    var optionMinutes = document.createElement('option');
    optionMinutes.value = j;
    optionMinutes.innerHTML = j;
    selectMinutes.appendChild(optionMinutes);
}



var valueAlarm;
var valueText;
var value;
var tocomeLi;
var alarms = [];

buttonSubmit.addEventListener('click', function submitReveil(event)
{
    event.preventDefault();

    //récupération des données

    var valueHour = selectHour.options[selectHour.selectedIndex].value;
    valueHour = parseInt(valueHour);
    valueHour = (valueHour < 10) ? '0' + valueHour : valueHour;

    var valueMinutes = selectMinutes.options[selectMinutes.selectedIndex].value;
    valueMinutes = parseInt(valueMinutes);
    valueMinutes = (valueMinutes < 10) ? '0' + valueMinutes : valueMinutes;

    valueText = textarea.value;

    valueAlarm = valueHour + ':' + valueMinutes + ':00';

    value = valueAlarm + ";" + valueText;

    tocomeLi = document.createElement('li')
    tocomeLi.classList.add("listTocome");
    tocomeLi.innerText = value;
    tocome.appendChild(tocomeLi);

    const alarmArray = alarms.push(value);

})


clock();

function clock()
{

    let date = new Date();  

    let heure = date.getHours(); 
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    heure = (heure < 10) ? '0' + heure : heure;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    secondes = (secondes < 10) ? '0' + secondes : secondes;

    let horlogeReveil = heure + ':' + minutes + ':' + secondes;

    alarms.forEach(element => {
        var alarme = element.split(';');
        if(horlogeReveil == alarme[0]){
            alert(alarme[1]);

            var passedLi = document.createElement('li')
            passedLi.innerText = element;
            passed.appendChild(passedLi);

            
            var tocomeChildren = tocome.childNodes;
            var y = Array.from(tocomeChildren);
            y.forEach(element => {
                if(passedLi.innerHTML == element.innerHTML){
                    tocome.removeChild(element);
                }
            });

        }
    });

    setTimeout(function(){ clock() }, 1000);
}

})