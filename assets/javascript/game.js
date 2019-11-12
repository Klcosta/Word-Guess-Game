//World Capitals:
var words = ["madrid", "london", "paris", "vientiane", "quito", "tashkent", "jakarta", "accra", "tahiti", "lilongwe", "santiago", "lima", "algeirs", "dublin", "manila", "bogota", "dakar", "bern", "lisbon", "rome", "ottowa", "brasilia", "bangkok", "beijing", "tokyo", "islamabad", "rabat", "kigali", "amsterdam", "prague", "berlin", "moscow", "doha", "ulaanbaatar", "abuja", "managua", "tehran", "wellington", "canberra", "brussels", "belgrade", "taipei", "cairo", "beirut", "nassau", "seoul", "kathmandu", "male", "tblisi", "yerevan", "luanda", "kinshasa", "brazzaville", "montevideo", "antananarivo", "nuakchot", "stockholm", "vienna", "luxembourg", "tegucigalpa", "athens", "zagreb", "vaduz", "copenhagen", "washington", "buenos aires", "reykjavik", "mexico city", "port au prince", "santo domingo", "havana", "san jose", "panama city", "hanoi", "phnom penh", "singapore", "oslo", "helsinki", "sofia", "skopje", "addis ababa", "guatemala city", "san salvador", "abu dhabi", "la paz", "new delhi", "kuala lumpur", "tallinn", "warsaw", "dhaka", "nairobi", "caracas", "colombo", "vatican city", "monaco", "andorra la vella", "bratislava", "budapest", "baku", "ljubljana", "kiev", "vilinius", "san marino", "juba", "la valletta", "ankara", "adamstown", "alofi", "amman", "apia", "ashgabhat", "asmara", "asuncion", "baghdad", "bamako", "bandar seri begawan", "bangui", "banjul", "basseterre", "belmopan", "bishkek", "bissau"]
var alreadyguessed = []

//Letters:

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Scoring Variables
var wins = 0;
var remguesses = 10;
var badguesses = [];
var counter = 0;

//answer = Array with "_,_,_,_,"
//letter = guessing word in array form
var answer = [];
var letters = [];
var correct = false

//Color Variables
var d = document.getElementById("currentword");

// FUNCTION-Checks letter
function checkletter(x) {
    if (alphabet.indexOf(x) === -1) {
        alert("You can only guess letters")
    }
    else {
        correct = false;
        for (var i = 0; i < answer.length; i++) {
            if (letters[i] === x) {
                var correct = true
                answer.splice(i, 1, x);
                document.getElementById("currentword").innerHTML = answer.join('');
            }

            console.log(correct);
            console.log(answer);
        }

        if (!correct) {
            if (badguesses.indexOf(x) === -1) {
                console.log("we are in!")
                badguesses.push(x)
                remguesses--;
                document.getElementById("remainingguesses").innerHTML = remguesses;
                document.getElementById("guessedletters").innerHTML = badguesses;
            }
        }
    }

    document.getElementById("guessedletters").innerHTML = badguesses;
    console.log(badguesses)
}

//Function to start   
//Choosing a Word
//Choosing the Word
function start() {
    d.classList.remove("greencolor")
    d.classList.remove("redcolor")
    document.getElementById("remainingguesses").innerHTML = remguesses;
    document.getElementById("instructions").innerHTML = "PRESS ANY LETTER TO CONTINUE"
    var randomnumber = Math.floor(Math.random() * words.length);
    var guessingword = words[randomnumber];
    console.log("guessingword: " + guessingword)
    if (alreadyguessed.indexOf(guessingword) === -1) {
        alreadyguessed.push(guessingword)
        console.log(alreadyguessed)
        document.getElementById("cityimg").src = "assets/images/" + guessingword + ".jpg";

        //Substituting words with arrays of letters
        letters = guessingword.split("");

        //Substituting letter with "_"
        answer = []
        for (var i = 0; i < letters.length; i++) {
            answer[i] = "_"
        }

        for (var i = 0; i < answer.length; i++) {
            if (letters[i] === " ") {
                answer.splice(i, 1, " ");
            }
        }

        //Display "_,_,_,_,_"

        document.getElementById("currentword").innerHTML = answer.join("");

        //answer = Array with "_,_,_,_,"
        console.log(answer)
        //answer.legth = number of letters in guessing word
        console.log(answer.length)
        //guessingword = Guessing word in string from
        console.log(guessingword)
        //letter = guessing word in array form
        console.log(letters)
    }
    else {
        start()
    }
}


//Comparing Word to User Guess
//Log User Guess
start()

document.onkeyup = function (event) {
    var guess = event.key.toLowerCase();

    //Compare User Guess to word and push changes
    console.log(guess);
    checkletter(guess);

    threeWayFork()
}

function threeWayFork() {
    if (remguesses === 0) {
        console.log("you loose")
        counter++;
        badguesses = [];
        remguesses = 10;
        document.getElementById("instructions").innerHTML = "PRESS THE SPACEBAR TO CONTINUE"
        document.getElementById("guessedletters").innerHTML = badguesses;
        document.getElementById("remainingguesses").innerHTML = remguesses;
        document.getElementById("currentword").innerHTML = letters.join('')
        document.getElementById("wins").innerHTML = wins + "/" + counter;
        d.className += " redcolor";
        console.log(badguesses)
        console.log("remguesses")
        console.log(remguesses)
        console.log(counter)
        document.onkeyup = function (event) {
            var spacebar = event.key.toLowerCase()
            if (spacebar === " ") {
                if (counter === 20){
                    finishgame()
                }
                else{
                    start()
                    document.onkeyup = function (event) {
                        var guess = event.key.toLowerCase();
                        checkletter(guess);
                        threeWayFork()
                    }
                }
            }
            else {
                alert("Press SpaceBar to continue")
            }
        }
    }

    var answerjoined = answer.join('');
    var lettersjoined = letters.join('');
    console.log(answerjoined);
    console.log(lettersjoined);

    //You Win
    if (answerjoined === lettersjoined) {
        console.log("youwin");
        wins++;
        counter++;
        badguesses = [];
        remguesses = 10;
        document.getElementById("instructions").innerHTML = "PRESS THE SPACEBAR TO CONTINUE"
        document.getElementById("guessedletters").innerHTML = badguesses;
        document.getElementById("remainingguesses").innerHTML = remguesses;
        document.getElementById("wins").innerHTML = wins + "/" + counter;
        console.log(counter)
        document.getElementById("currentword").innerHTML = letters.join('')
        d.className += " greencolor";
        document.onkeyup = function (event) {
            var spacebar = event.key.toLowerCase()
            if (spacebar === " ") {
                if (counter === 20) {
                    finishgame()
                }
                else {
                    start()
                    document.onkeyup = function (event) {
                        var guess = event.key.toLowerCase();
                        checkletter(guess);
                        threeWayFork()
                    }
                }
            }
            else {
                alert("Press the SpaceBar to continue")
            }
        }
    }

    //You Keep Going

    //When you've played 20 words

    function finishgame() {

        console.log("Game Over")
        document.getElementById("instructions").innerHTML = "PRESS THE SPACEBAR TO RESTART"
        if (wins >= 19) {
            document.getElementById("cityimg").src = "assets/images/scoreAv2.jpg";
        }
        if (wins === 17 || wins === 18) {
            document.getElementById("cityimg").src = "assets/images/scoreBv2.jpg";
        }
        if (wins === 15 || wins === 16) {
            document.getElementById("cityimg").src = "assets/images/scoreCv2.jpg";
        }
        if (wins === 13 || wins === 14) {
            document.getElementById("cityimg").src = "assets/images/scoreDv2.jpg";
        }
        if (wins <= 12) {
            document.getElementById("cityimg").src = "assets/images/scoreFv2.jpg";
        }

        alreadyguessed = []
        counter = 0
        wins = 0
        remguesses = 10
        document.getElementById("currentword").innerHTML = ""
        document.getElementById("wins").innerHTML = ""

    }
}

