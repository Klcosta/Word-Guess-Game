//World Capitals:
var words = ["madrid", "london", "vientiane", "quito", "Naypyidaw", "tashkent", "jakarta", "accra", "tahiti", "","lilongwe", "paris", "santiago", "lima", "algeirs", "dublin" , "manila", "bogota", "istambul", "dakar", "bern", "lisbon", "rome", "ottowa", "brasilia", "bangkok", "beijing", "tokyo", "islamabad", "manila", "rabat", "kigali", "moscow", "welington", "juba", "kingston"]

//Scoring Variables
var wins = 0;
var remguesses = 10;
var badguesses = [];

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
            document.getElementById("currentword").innerHTML = answer.join(' ');
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
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("remainingguesses").innerHTML = remguesses;
        var randomnumber = Math.floor(Math.random() * words.length);
        var guessingword = words[randomnumber];

    //Substituting words with arrays of letters
        letters = guessingword.split("");

    //Substituting letter with "_"
        answer = []
        for (var i = 0; i < letters.length; i++) {
        answer[i] = "_"
        }

    //Display "_,_,_,_,_"

        document.getElementById("currentword").innerHTML = answer.join(' ');

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
        badguesses = [];
        remguesses = 10;
        document.getElementById("guessedletters").innerHTML = badguesses;
        document.getElementById("remainingguesses").innerHTML = remguesses;
        console.log(badguesses)
        console.log(remguesses)
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
        badguesses = [];
        remguesses = 10;
        document.getElementById("guessedletters").innerHTML = badguesses;
        document.getElementById("remainingguesses").innerHTML = remguesses;
        document.getElementById("wins").innerHTML = wins;
        start();
    }

    //You Keep Going

}




