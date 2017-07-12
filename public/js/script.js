//create a container with the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//display the alphabet on the page
for (var i = 0; i < alphabet.length; i++) {
    $('#buttons-for-letters').append('<button class="btn btn-info">'+ alphabet[i]+'</button>');
};
//create button for each letter

//WHEN I clicks on a letter
//THEN I see the letters grey out

//WHEN I click on the instruction buttons
//THEN a widow pops up where I can read the instructions of the game

//create lines that match the length of the word
//create word bank


//WHEN I click on a correct letter
//THEN I see the letter appear on the line

//WHEN I click on the incorrect letter
//THEN I see the "number of lives" go down

//WHEN I guess a letter
//THEN I see the number of attempts I have left

//WHEN I guess the last correct letter
//THEN I see "You Win!"

//WHEN I make my last attempt
//THEN display "You lose. Try again"

//WHEN I'm finished playing a game
//THEN I can click on "play again"

$(function(){
    
});