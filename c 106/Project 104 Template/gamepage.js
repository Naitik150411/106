// random value generated
  var y=Math.floor(Math.random()*10+1);
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
var x=document.getElementById("guessField").ariaValueMax;
if(x=y)
{
    alert("CONGRATULATIONS!!!!!!!!!!"+playername+"YOU GUESSED IT RIGHT IN"
    +guess+"GUESS");
    guess=1;
}
else if(x>y)