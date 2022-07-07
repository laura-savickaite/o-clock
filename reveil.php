<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="scripts/reveil.js" charset="utf-8"></script>
    <title>Reveil</title>
</head>
<body>
<nav>
    <a href="index.php"><p>Accueil</p></a>
    <a href="horloge.php"><p>Horloge</p></a>
    <a href="minuteur.php"><p>Minuteur</p></a>
    <a href="chrono.php"><p>Chronomètre</p></a>
    <a href="reveil.php"><p>Réveil</p></a>    
</nav>

<div class="popup">
    <span id="popup-p"></span>
    <button type="button" id="close-popup">OK</button>
</div>

<div id= "reveil">
    <div id="selectReveil">
        <select name="hourSelect" id="hourSelect"></select>
        <p>:</p> 
        <select name="minutesSelect" id="minutesSelect"></select>        
    </div>
    <textarea id="nameReveil" name="nameReveil" rows="5" cols="33"></textarea>
    <button id = "buttonReveil">submit</button>
    <div id="listesReveil">
        <ul id="tocome"></ul>
        <ul id="passed"></ul>        
    </div>

</div>

<footer>
    <a href="https://github.com/laura-savickaite/o-clock"><img src="images/github.png" width="50px"></a>
</footer>
</body>
</html>