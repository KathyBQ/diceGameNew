//global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls;
balance = 0;
//objects
var die1Image = new Image();
var die2Image = new Image();

function rollDice(){
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon(){
    if (dieSum <= 5){
        outcome = "You lose, please pay me " + 5 + " dollars. (-5)";
        balance -= 5;
    }
    else if (dieSum >= 9){
        outcome = "You win, I pay you " + 5 + " dollars. (+5)";
        balance += 5;
    }
    else{
        outcome = "Its a draw, nobody wins or loses. (+0)";
    }

    //report the outcome
    //banner = die1 + " + " + die2 + " is: " + dieSum;
    //document.querySelector("h3").innerHTML = banner + "<br>" + outcome;
    //document.querySelector("h3").innerHTML = "die1:" + die1 + ", die2:" + die2 + ", Sum:" + dieSum + ". " + outcome + "<br>";
    document.querySelector("h4").innerHTML = "Your Balance: " + balance; 
    banner = "die1:" + die1 + ", die2:" + die2 + ", Sum:" + dieSum + ". "
    return banner + outcome + "<br>";

}

function letsPlay(){
    
    numRolls = document.getElementById("rollTimes").value;
    var outs = "";

    for (let i = 0; i < numRolls; i++){
        //alert("Play " + (i+1));
        rollDice();
        outs += whoWon();
        document.querySelector("h3").innerHTML = outs;
    }

    //reset balance for the next play
    balance = 0;
}