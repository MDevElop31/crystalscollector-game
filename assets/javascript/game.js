/*There will be four crystals displayed as buttons on the page.

The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.

The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.*/

var wins = 0;
var losses = 0;
var counter = 0;

var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

 $(function(getNumber) {
 	$("#random-number").html("<p>Random Number: " + randomNumber + "</p>");
 });

var yellow = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);
var blue = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);

$(function(pickValue) {
	$("#blue").click(function(){
		counter = counter + yellow;
		adjust();
	})
	$("#red").click(function(){
		counter  = counter  + red;
		adjust();
	})
	$("#yellow").click(function(){
		counter  = counter  + blue;
		adjust();
	})
	$("#green").click(function(){
		counter  = counter  + green;
		adjust();
	})

});

	var adjust = function() {
		if (counter === randomNumber) {
			wins++;
			reset();
}
		else if(counter > randomNumber){
			losses++;
			reset();
}
		else{
			stats();
}}

	var stats = function(){
		$("#wins").empty();
		$("#wins").html("<p>Wins: " + wins + "</p>")
		$("#losses").empty();
		$("#losses").html("<p>Losses: " + losses + "</p>")
		$("#total-score").empty();
		$("#total-score").html("<p>Your total score is: " + counter + "</p>");
		
	}
	
	var reset = function(){
	counter = 0;
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$("#random-number").empty();
	$("#random-number").html("<p>Random Number: " + randomNumber + "</p>");;
	yellow = Math.floor((Math.random()* 12) + 1);
    red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    stats();
}

