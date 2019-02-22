var words = ["Madrid", "London", "Paris", "Algeirs", "Istambul", "Lisbon", "Rome", "Ottowa", "Brasilia", "Bangkok", "Beijing", "Tokyo", "Islamabad", "Manila", "Rabat", "Kigali", "Moscow", "Welington", "Juba"]

// FUNCTION-Checks letter
function checkletter(x) {
    for (var i=0; i < answer.length; i++){
        if (letters[i] === x) {
            var correct = true
        }
        else {
            correct = false
        };
        console.log(correct);
    }
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

    console.log(answer)
    console.log(guessingword)
    console.log(answer.length)
    console.log(letters)


    //Comparing Word to User Guess
    //Log User Guess

    document.onkeyup = function(event) {
    var guess = event.key;

    console.log(guess);
    checkletter(guess);

    }

    //Compare guess to word



