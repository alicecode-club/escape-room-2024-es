function activateSecondButton() {
    alert("Hello and welcome to the evil queen's basement. Now we will give you a clue: your clue is an object because of which all the potions and spells exist. I hope you make it or something bad happens...");
    document.getElementById('secondButton').style.display = 'block';
}

var lifes = 3;

function showQuestion() {
    alert('Warm congratulations, you managed to pass the magic mirror stage. Now I will give you a hint to the first ingredient in the potion: 1) It is in a magic cave 2) Its color is blue 3) Its environment is Saudi Arabia!');
    
    var answer = prompt('So where are we going to (which fairy tale is this)?');

    if (answer && answer.toLowerCase() === 'aladin') {
        alert('Correct! Aladdin is the answer. You should remember the number 8');
    } else {
        lifes -= 1;
        alert(`Wrong answer. You have another ${lifes} lives left.`);
        
        if (lifes === 0) {
            alert("You failed the game 😭");
        } else {
            showQuestion();
        }
    }
}

// You can call the showQuestion function or any other function based on your game logic.

