<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" charset="utf-8"></script>
    <title>O'Clock</title>
</head>
<body>

    <div id= "horloge">
    </div>

    <div id= "minuteur">
        <form action="" method="post">
            <div id = "numbersTimer">
                <input id="hours" name="hours" value = "00" type="number" /> 
                <p>:</p> 
                <input id="minutes" name="minutes" value = "00" type="number" /> 
                <p>:</p> 
                <input id="seconds" name="seconds" value = "00" type="number" />  
            </div>
            <button id = "buttonMinuteur" type="submit" name="submitMinuteur" data-switch = "on">ok</button>
        </form>
    </div>


    <div id= "chrono">
        <time>00:00:00</time>
        <button id = "buttonChrono" data-switch = "on">go</button>
        <button id = "resetChrono">reset</button>
    </div>
</body>
</html>