//World Capitals:
var words = ["madrid", "london", "paris", "algeirs", "dublin" , "manila", "bogota", "istambul", "dakar", "bern", "lisbon", "rome", "ottowa", "brasilia", "bangkok", "beijing", "tokyo", "islamabad", "manila", "rabat", "kigali", "moscow", "welington", "juba", "kingston"]

//Scoring Variables
var wins = 0
var remguesses = 10
var badguesses = []

// FUNCTION-Checks letter
function checkletter(x) {
    for (var i=0; i < answer.length; i++){
        if (letters[i] === x) {
            var correct = true
            answer.splice(i, 1, x);
            document.getElementById("currentword").innerHTML = answer;
        }
        else {
            var correct = false 
            badguesses.push(x)
        };

        console.log(correct);
        console.log(answer)
    }

    console.log(badguesses)
    for (var i=0; i< answer.length-1; i++){
        badguesses.pop()
    }
    
    document.getElementById("guessedletters").innerHTML = badguesses;
    console.log(badguesses)
  }
    
    
    // Choosing a Word
    //Choosing the Word
    var randomnumber = Math.floor(Math.random() * words.length);
    var guessingword = words[randomnumber];

    //Substituting words with arrays of letters
    var letters = guessingword.split("");

    //Substituting letter with "_"
    var answer = []
    for (var i = 0; i < letters.length; i++) {
    answer[i] = "_"
    }

    //Display "_,_,_,_,_"

    document.getElementById("currentword").innerHTML = answer;

    // answer = Array with "_,_,_,_,"
    console.log(answer)
    // answer.legth = number of letters in guessing word
    console.log(answer.length)
    // guessingword = Guessing word in string from
    console.log(guessingword)
    // letter = guessing word in array form
    console.log(letters)


    //Comparing Word to User Guess
    //Log User Guess

    document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();

    //Compare User Guess to word and push changes
    console.log(guess);
    checkletter(guess);

    //Remaining guess -1
    remguesses--
    document.getElementById("remainingguesses").innerHTML = remguesses;
    // console.log(remguesses)

    //3 way fork - You Win, - You Loose, You Keep going

    if (remguesses === 0) {
        console.log("you loose")
    }
    

    }




