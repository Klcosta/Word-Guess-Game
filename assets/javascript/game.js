//World Capitals:
var words = ["madrid", "london", "paris", "vientiane", "quito", "tashkent", "jakarta", "accra", "tahiti","lilongwe", "santiago", "lima", "algeirs", "dublin" , "manila", "bogota", "istambul", "dakar", "bern", "lisbon", "rome", "ottowa", "brasilia", "bangkok", "beijing", "tokyo", "islamabad", "rabat", "kigali", "amsterdam", "prague","berlin","moscow","doha","ulaanbaatar","abuja","managua","tehran","wellington","canberra","brussels","belgrade", "taipei", "cairo","beirut","nassau","seoul", "kathmandu", "male","tblisi","yerevan", "luanda", "kinshasa", "brazzaville", "montevideo", "antananarivo", "nuakchot","stockholm","vienna", "luxembourg","tegucigalpa","athens", "zagreb", "vaduz", "copenhagen", "washington", "buenos aires","reykjavik", "mexico city", "port au prince", "santo domingo", "havana", "san jose", "panama city", "hanoi", "phnom penh", "singapore","oslo","helsinki","sofia","skopje","addis ababa","guatemala city", "san salvador", "abu dhabi"]


//Scoring Variables
var wins = 0;
var remguesses = 8;
var badguesses = [];
var counter = 0;

//answer = Array with "_,_,_,_,"
//letter = guessing word in array form
var answer = [];
var letters = [];
var correct = false

// FUNCTION-Checks letter
function checkletter(x) {
    correct = false;
    for (var i=0; i < answer.length; i++){
        if (letters[i] === x) {
            var correct = true
            answer.splice(i, 1, x);
            document.getElementById("currentword").innerHTML = answer.join('');
        }

        console.log(correct);
        console.log(answer);

    }
    
    if (!correct){
        badguesses.push(x)
        remguesses--;
        document.getElementById("remainingguesses").innerHTML = remguesses;
        document.getElementById("guessedletters").innerHTML = badguesses;
    }
    
    document.getElementById("guessedletters").innerHTML = badguesses;
    console.log(badguesses)
  }
    
 //Function to start   
    //Choosing a Word
    //Choosing the Word
    function start(){
        document.getElementById("wins").innerHTML = wins + "/" + counter;
        document.getElementById("remainingguesses").innerHTML = remguesses;
        var randomnumber = Math.floor(Math.random() * words.length);
        var guessingword = words[randomnumber];
        document.getElementById("cityimg").src = "assets/images/" + guessingword + ".jpg";
    
    //Substituting words with arrays of letters
        letters = guessingword.split("");

    //Substituting letter with "_"
        answer = []
        for (var i = 0; i < letters.length; i++) {
        answer[i] = "_"
        }

        for (var i=0; i < answer.length; i++){ 
            if (letters[i]===" ") {
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


    //Comparing Word to User Guess
    //Log User Guess
    start()

    document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();

    //Compare User Guess to word and push changes
    console.log(guess);
    checkletter(guess);

    //3 way fork-You Win,-You Loose,YouKeepgoing
    
    //You Loose
    if (remguesses === 0) {
        console.log("you loose")
        counter++;
        badguesses = [];
        remguesses = 8;
        document.getElementById("guessedletters").innerHTML = badguesses;
        document.getElementById("remainingguesses").innerHTML = remguesses;
        console.log(badguesses)
        console.log(remguesses)
        console.log(counter)
        start()
    } 
    
    var answerjoined = answer.join('');
    var lettersjoined = letters.join('');
    console.log(answerjoined);
    console.log(lettersjoined);

    //You Win
    if(answerjoined === lettersjoined){
        console.log("youwin");
        wins ++;
        counter++;
        badguesses = [];
        remguesses = 8;
        document.getElementById("guessedletters").innerHTML = badguesses;
        document.getElementById("remainingguesses").innerHTML = remguesses;
        document.getElementById("wins").innerHTML = wins + "/" + counter;
        console.log(counter)
        start();
    }

    //You Keep Going

    //When you've played 20 words

    if(counter === 20){
        console.log("Game Over")
        if (wins > 19){
            document.getElementById("cityimg").src = "assets/images/scoreA.jpg";
        } 
        if (wins === 17 || wins === 18) {
            document.getElementById("cityimg").src = "assets/images/scoreB.jpg";
        }
        if (wins === 15 || wins === 16) {
            document.getElementById("cityimg").src = "assets/images/scoreC.jpg";
        }
        if (wins === 13 || wins === 14) {
            document.getElementById("cityimg").src = "assets/images/scoreD.jpg";
        }
        if (wins < 12) {
            document.getElementById("cityimg").src = "assets/images/scoreF.jpg";
        }
        
        counter = -1
        wins = 0
        remguesses = 1
    } 



}




