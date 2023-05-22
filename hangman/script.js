const questions = ["ХАМГИЙН ТОМ ХӨХТӨН АМЬТАН?","ХАМГИЙН УХААНТАЙ ХҮН?"];
const answers = ["ХАЛИМ", "ТА ӨӨРӨӨ "];
var index;
var chance;
var length;
var sum;
var key;
function createQuestion(){
document.getElementById("а").disabled = false;
document.getElementById("б").disabled = false;
document.getElementById("в").disabled = false;
document.getElementById("г").disabled = false;
document.getElementById("д").disabled = false;
document.getElementById("е").disabled = false;
document.getElementById("ё").disabled = false;
document.getElementById("ж").disabled = false;
document.getElementById("з").disabled = false;
document.getElementById("и").disabled = false;
document.getElementById("й").disabled = false;
document.getElementById("к").disabled = false;
document.getElementById("л").disabled = false;
document.getElementById("м").disabled = false;
document.getElementById("н").disabled = false;
document.getElementById("о").disabled = false;
document.getElementById("ө").disabled = false;
document.getElementById("п").disabled = false;
document.getElementById("р").disabled = false;
document.getElementById("с").disabled = false;
document.getElementById("т").disabled = false;
document.getElementById("у").disabled = false;
document.getElementById("ү").disabled = false;
document.getElementById("ф").disabled = false;
document.getElementById("х").disabled = false;
document.getElementById("ц").disabled = false;
document.getElementById("ч").disabled = false;
document.getElementById("ш").disabled = false;
document.getElementById("щ").disabled = false;
document.getElementById("ъ").disabled = false;
document.getElementById("ы").disabled = false;
document.getElementById("ь").disabled = false;
document.getElementById("э").disabled = false;
document.getElementById("ю").disabled = false;
document.getElementById("я").disabled = false;
    chance = 6;
    index = Math.floor(Math.random() * questions.length);
    length = answers[index].length;
    key = length; 
    document.getElementById("answer").value = null;
    for(var i=1; i <= length; i++) document.getElementById("answer").value += "_";
    document.getElementById("chance").innerHTML = "Chances: " + chance;
    document.getElementById("image").src = "duujluur.png";
    document.getElementById("question").value = questions[index];
    haha = document.getElementById("answer").value.toString();
}

function slide(){
    createQuestion();
}


function checkAnswer(value){
    switch (value) {
        case "А":
          document.getElementById("а").disabled = true;
          break;
        case "Б":
          document.getElementById("б").disabled = true;
          break;
        case "В":
          document.getElementById("в").disabled = true;
          break;
        case "Г":
          document.getElementById("г").disabled = true;
          break;
        case "Д":
          document.getElementById("д").disabled = true;
          break;
        case "Е":
          document.getElementById("е").disabled = true;
          break;
        case "Ё":
          document.getElementById("ё").disabled = true;
          break;
        case "Ж":
          document.getElementById("ж").disabled = true;
          break;
        case "З":
          document.getElementById("з").disabled = true;
          break;
        case "И":
          document.getElementById("и").disabled = true;
          break;
        case "Й":
          document.getElementById("й").disabled = true;
          break;
        case "К":
          document.getElementById("к").disabled = true;
          break;
        case "Л":
          document.getElementById("л").disabled = true;
          break;
        case "М":
          document.getElementById("м").disabled = true;
          break;
        case "Н":
          document.getElementById("н").disabled = true;
          break;
        case "О":
          document.getElementById("о").disabled = true;
          break;
        case "Ө":
          document.getElementById("ө").disabled = true;
          break;
        case "П":
          document.getElementById("п").disabled = true;
          break;
        case "Р":
          document.getElementById("р").disabled = true;
          break;
        case "С":
          document.getElementById("с").disabled = true;
          break;
        case "Т":
          document.getElementById("т").disabled = true;
          break;
        case "У":
          document.getElementById("у").disabled = true;
          break;
        case "Ү":
          document.getElementById("ү").disabled = true;
          break;
        case "Ф":
          document.getElementById("ф").disabled = true;
          break;
        case "Х":
          document.getElementById("х").disabled = true;
          break;
        case "Ц":
          document.getElementById("ц").disabled = true;
          break;
        case "Ч":
          document.getElementById("ч").disabled = true;
          break;
        case "Ш":
          document.getElementById("ш").disabled = true;
          break;
        case "Щ":
          document.getElementById("щ").disabled = true;
          break;
        case "Ъ":
          document.getElementById("ъ").disabled = true;
          break;
        case "Ы":
          document.getElementById("ы").disabled = true;
          break;
        case "Ь":
          document.getElementById("ь").disabled = true;
          break;
        case "Э":
          document.getElementById("э").disabled = true;
          break;
        case "Ю":
          document.getElementById("ю").disabled = true;
          break;
        case "Я":
          document.getElementById("я").disabled = true;
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
                document.getElementById("image").src = "biygui.png";
                break;
            case 5:
                document.getElementById("image").src = "gargui.png";
                break;
            case 4:
                document.getElementById("image").src = "1gartai.png";
                break;
            case 3:
                document.getElementById("image").src = "hulgui.png";
                break;
            case 2:
                document.getElementById("image").src = "1hultei.png";
                break;
            case 1:
                document.getElementById("image").src = "game_over.gif";
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
            document.getElementById("image").src = "winn_gif-url.gif";
        }
    }
}