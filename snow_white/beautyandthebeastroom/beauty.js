var buttons = document.querySelectorAll('button');
var timerInterval;
var lifes = 3;
var buttonClicked = false; // משתנה שמציין האם הכפתור נלחץ כבר או לא

function disableAllButtons() {
    buttons.forEach(function(button) {
        if (!button.disabled) { // בדיקה האם הכפתור כבר לא מופעל
            button.disabled = true;
        }
    });
}

var buttons = document.querySelectorAll('button');
var buttonClicked = false;

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
    document.getElementById('first1').style.display = 'none';
    document.getElementById('third3').style.display = 'none'; 
    disableAllButtons();
}

function fourth() {
    document.getElementById('third3').style.display = 'none'; 
    alert("Excellent, the Evil Queen will be happy to know that you almost managed to get all the ingredients for the potion");
    disableAllButtons();
    first2();
}

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (!buttonClicked) {
            buttonClicked = true;
            disableAllButtons();
        }
    });
});

var lifes = 3; // Define 'lifes' variable outside the function

function first2() {
    var answer = prompt('Which actress played Belle in the movie?');

    if (answer && answer.toLowerCase() === 'emma watson') {
        alert('Correct! Emma Watson is the answer you get the third ingredient👏👏');
        document.getElementById('fourth4').style.display = 'none';
        window.location.href="../peterRoom/peter.html"
    } else {
        lifes -= 1;
        alert(`Wrong answer. You have another ${lifes} lives left.`);

        if (lifes <= 0) {
            alert("You failed the game 😭");
            document.getElementById('first1').style.display = 'inline-block';
            document.getElementById('fourth4').style.display = 'none';
            disableAllButtons();
        } else {
            first2();
        }
    }
}
function second() {
    
    var answer = prompt('and also who remembers what the villain is called in this story?');

    if (answer && answer.toLowerCase() === 'gaston') {
        alert('Correct! Gaston is the answer. So like I already told you about, this time I want to illuminate the atmosphere for you');
        document.getElementById('third3').style.display = 'inline-block';
        document.getElementById('second2').style.display = 'none';
    } else {
        lifes -= 1;
        alert(`Wrong answer. You have another ${lifes} lives left.`);

        if (lifes === 0) {
            alert("You failed the game 😭");
            disableAllButtons();
            document.getElementById('second2').style.display = 'none';
        } else {
            second(); 
        }
    }
}
