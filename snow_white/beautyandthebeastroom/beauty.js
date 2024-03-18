var buttons = document.querySelectorAll('button');
var timerInterval;
var lifes = 3;
var buttonClicked = false; // משתנה שמציין האם הכפתור נלחץ כבר או לא

function disableAllButtons() {
    buttons.forEach(function(button) {
        button.disabled = true;
    });
}

function first() {
    alert("You can't open me yet, try somewhere else. I'm the last hint");
    document.getElementById('second2').style.display = 'inline-block';
    document.getElementById('second2').addEventListener('click', checkfive);
    disableAllButtons();
}

function third() {
    alert("Excellent, the Evil Queen will be happy to know that you almost managed to get all the ingredients for the potion");
    alert("Well, just almost. Don't forget that you have to get the petals of the enchanted rose🌹");
    alert("Okay, so you have to answer the following question in order to get the rose: Which actress played Belle in the movie?");
    document.getElementById('fourth4').style.display = 'inline-block';
    disableAllButtons();
}

function fourth() {
    alert("Excellent, the Evil Queen will be happy to know that you almost managed to get all the ingredients for the potion");
    disableAllButtons();
}

function first2() {
    alert('Hi there, again this time I want to illuminate the atmosphere for you ');

    var answer = prompt('Which actress played Belle in the movie?');

    if (answer && answer.toLowerCase() === 'emma wotson') {
        alert('Correct! Emma Wotson is the answer');
        document.getElementById('fourth4').style.display = 'inline-block';
    } else {
        lifes -= 1;
        alert(`Wrong answer. You have another ${lifes} lives left.`);

        if (lifes === 0) {
            alert("You failed the game 😭");
            disableAllButtons();
        } else {
            second();
        }
    }
}

function second() {
    var answer = prompt('and also who remembers what the villain is called in this story?');

    if (answer && answer.toLowerCase() === 'gaston') {
        alert('Correct! Gaston is the answer. So like I already told you about, this time I want to illuminate the atmosphere for you');
        document.getElementById('third3').style.display = 'inline-block';
    } else {
        lifes -= 1;
        alert(`Wrong answer. You have another ${lifes} lives left.`);

        if (lifes === 0) {
            alert("You failed the game 😭");
            disableAllButtons();
        } else {
            first2(); // קריאה לפונקציה חדשה במקום לקרוא שוב לפונקציה second()
        }
    }
}

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (!buttonClicked) { // בדיקה האם הכפתור לא נלחץ כבר
            buttonClicked = true; // מסמן שהכפתור נלחץ
            disableAllButtons();
        }
    });
});
