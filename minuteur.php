<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="scripts/minuteur.js" charset="utf-8"></script>
    <title>Minuteur</title>
</head>
<body>

<nav>
    <a href="index.php"><p>Accueil</p></a>
    <a href="horloge.php"><p>Horloge</p></a>
    <a href="minuteur.php"><p>Minuteur</p></a>
    <a href="chrono.php"><p>Chronomètre</p></a>
    <a href="reveil.php"><p>Réveil</p></a>    
</nav>


<div id= "minuteur">
    <form action="" method="post">
        <div id = "numbersTimer">
            <input id="hours" name="hours" value = "00" type="number" /> 
            <p>:</p> 
            <input id="minutes" name="minutes" value = "00" type="number" /> 
            <p>:</p> 
            <input id="seconds" name="seconds" value = "00" type="number" />  
        </div>
        <button id = "buttonMinuteur" type="submit" name="submitMinuteur" data-switch = "on">on</button>
    </form>
</div>


<footer>
    <a href="https://github.com/laura-savickaite/o-clock"><img src="images/github.png" width="50px"></a>
</footer>
</body>
</html>