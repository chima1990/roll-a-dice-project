function rollDice() {
    // Ask the user to press Enter to roll the dice
    alert("Press OK to roll the dice...");

    // Generate a random number between 1 and 6
    let diceRoll = Math.floor(Math.random() * 6) + 1;

    // Display the value rolled to the user
    alert(`You rolled a ${diceRoll}!`);
}

// Run the dice roll program
rollDice();