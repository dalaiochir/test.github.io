const questions = ["BIGGEST MAMMAL?", "FASTEST VEHICLE?", "JIJGEE & ...?", "MONGOLIAN PRESIDENT?", "MONGOLIAN DISH?", "MERCEDES...", "WHAT COLOR IS SNOW?", "BIG GREEN AVENGER", "THUNDER GOD AVENGER"];
const answers = ["WHALE", "JET", "TSOGTOO", "HURELSUH", "BUUZ", "BENZ", "WHITE", "HULK", "THOR"];
var index;
var chance;
var length;
var sum;
var key;
function createQuestion(){
    document.getElementById("a").disabled = false;
    document.getElementById("b").disabled = false;
    document.getElementById("c").disabled = false;
    document.getElementById("d").disabled = false;
    document.getElementById("e").disabled = false;
    document.getElementById("f").disabled = false;
    document.getElementById("g").disabled = false;
    document.getElementById("h").disabled = false;
    document.getElementById("i").disabled = false;
    document.getElementById("j").disabled = false;
    document.getElementById("k").disabled = false;
    document.getElementById("l").disabled = false;
    document.getElementById("m").disabled = false;
    document.getElementById("n").disabled = false;
    document.getElementById("o").disabled = false;
    document.getElementById("p").disabled = false;
    document.getElementById("q").disabled = false;
    document.getElementById("r").disabled = false;
    document.getElementById("s").disabled = false;
    document.getElementById("t").disabled = false;
    document.getElementById("u").disabled = false;
    document.getElementById("v").disabled = false;
    document.getElementById("w").disabled = false;
    document.getElementById("x").disabled = false;
    document.getElementById("y").disabled = false;
    document.getElementById("z").disabled = false;
    chance = 6;
    index = Math.floor(Math.random() * questions.length);
    length = answers[index].length;
    key = length;
    document.getElementById("answer").value = null;
    for(var i=1; i <= length; i++) document.getElementById("answer").value += "_";
    document.getElementById("chance").innerHTML = "Chances: " + chance;
    document.getElementById("image").src = "assets/duujluur.png";
    document.getElementById("question").value = questions[index];
    haha = document.getElementById("answer").value.toString();
}

function slide(){
    document.getElementById("item-2").style.marginTop = "-45.6%";
    document.getElementById("item-2").style.transition = "margin-top 2s ease-in-out";
    document.getElementById("flex-container").style.marginTop = "-90%";
    document.getElementById("flex-container").style.transition = "margin-top 2s ease-in-out";
    createQuestion();
}

function checkAnswer(value){
    switch(value){
        case "A":
            document.getElementById("a").disabled = true;
            break;
        case "B":
            document.getElementById("b").disabled = true;
            break;
        case "C":
            document.getElementById("c").disabled = true;
            break;
        case "D":
            document.getElementById("d").disabled = true;
            break;
        case "E":
            document.getElementById("e").disabled = true;
            break;
        case "F":
            document.getElementById("f").disabled = true;
            break;
        case "G":
            document.getElementById("g").disabled = true;
            break;
        case "H":
            document.getElementById("h").disabled = true;
            break;
        case "I":
            document.getElementById("i").disabled = true;
            break;
        case "J":
            document.getElementById("j").disabled = true;
            break;
        case "K":
            document.getElementById("k").disabled = true;
            break;
        case "L":
            document.getElementById("l").disabled = true;
            break;
        case "M":
            document.getElementById("m").disabled = true;
            break;
        case "N":
            document.getElementById("n").disabled = true;
            break;
        case "O":
            document.getElementById("o").disabled = true;
            break;
        case "P":
            document.getElementById("p").disabled = true;
            break;
        case "Q":
            document.getElementById("q").disabled = true;
            break;
        case "R":
            document.getElementById("r").disabled = true;
            break;
        case "S":
            document.getElementById("s").disabled = true;
            break;
        case "T":
            document.getElementById("t").disabled = true;
            break;
        case "U":
            document.getElementById("u").disabled = true;
            break;
        case "V":
            document.getElementById("v").disabled = true;
            break;
        case "W":
            document.getElementById("w").disabled = true;
            break;
        case "X":
            document.getElementById("x").disabled = true;
            break;
        case "Y":
            document.getElementById("y").disabled = true;
            break;
        case "Z":
            document.getElementById("z").disabled = true;
            break;
    }
    sum = 0;
    for(var i=0; i < length; i++){
        if(answers[index].charAt(i) == value){
            sum++;
        }
    }
    if(sum == 0){
        switch (chance){
            case 6:
                document.getElementById("image").src = "assets/biygui.png";
                break;
            case 5:
                document.getElementById("image").src = "assets/gargui.png";
                break;
            case 4:
                document.getElementById("image").src = "assets/1gartai.png";
                break;
            case 3:
                document.getElementById("image").src = "assets/hulgui.png";
                break;
            case 2:
                document.getElementById("image").src = "assets/1hultei.png";
                break;
            case 1:
                document.getElementById("image").src = "assets/game_over.gif";
                break;
        }
        chance--; 
        document.getElementById("chance").innerHTML = "Chances: " + chance;   
    }else{
        for(var i=0; i < length; i++){
            if(answers[index].charAt(i).toUpperCase() == value){
                haha = haha.substring(0, i) + value + haha.substring(i + 1);
                key--;
            }
        }
        document.getElementById("answer").value = haha;
        if(key == 0){
            document.getElementById("image").src = "assets/winn_gif-url.gif";
        }
    }
}