<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="scripts/chrono.js" charset="utf-8"></script>
    <title>Chronomètre</title>
</head>
<body>

<nav>
    <a href="index.php"><p>Accueil</p></a>
    <a href="horloge.php"><p>Horloge</p></a>
    <a href="minuteur.php"><p>Minuteur</p></a>
    <a href="chrono.php"><p>Chronomètre</p></a>
    <a href="reveil.php"><p>Réveil</p></a>    
</nav>

<div id= "chrono">
    
    <time>00:00:00</time>
    <div id="buttonsChrono">
        <button id = "buttonChrono" data-switch = "on">go</button>
        <button id = "resetChrono">reset</button>
        <button id = "tourChrono">tour</button>        
    </div>

</div>

<footer>
    <a href="https://github.com/laura-savickaite/o-clock"><img src="images/github.png" width="50px"></a>
</footer>
    
</body>
</html>