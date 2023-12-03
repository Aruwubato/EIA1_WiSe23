// Ask if the user is ready to play!

confirm("Are you ready to battle?")

var age = prompt("How old are you?");

if (age < 18) {
console.log ("Fight at your own risk!");
}

else {
console.log ("Let's fight!");
}

console.log ("Infront of you stands the greatest pokémon trainer to ever exist. He challenges you to battle him and his pokémon.");

console.log ("You are sure you can beat him easily with your starter pokémon.");

var userAnswer = prompt("Do you want to challenge the pokémon trainer?");

if (userAnswer==="yes") {
console.log ("You pick Charizard and he blazes everything in his way, winning you the battle with no effort!");
}

else {
console.log ("The pokémon trainer looks down at you pretentiously and indignantly as you walk away full of shame.");
}

var feedback = prompt("How would you rate the battle?");

if (feedback > 5) {
console.log ("You knew you had this strength and power to beat everyone with your pokémon. No one can stop you!");
}

else {
console.log ("I'll keep practicing more 'til I become strong enough...");
}