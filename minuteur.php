<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="scripts/minuteur.js" charset="utf-8"></script>
    <title>Minuteur</title>
</head>
<body>

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
    
</body>
</html>