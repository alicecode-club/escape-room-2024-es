var timerTextElement = document.getElementById('timerText');
var buttons = document.querySelectorAll('button');
var timerInterval;
var lifes = 3;

window.onload = function() {
    startTimer('The Timer');
};
function playVideo() {
    var videoContainer = document.getElementById('video-container');
    var videoFrame = document.getElementById('videoFrame');
    var nextButton = document.getElementById('nextButton');
    
    videoFrame.src += "?autoplay=1"; // נוסיף את פרמטר האוטומטי פליי
    videoContainer.style.display = 'block';
    
    // הפעלת הכפתור לאחר סיום הסרטון
    videoFrame.addEventListener('ended', function () {
        nextButton.style.display = 'block';
    });
}

function updateTimerText(secondsLeft) {
    var minutes = Math.floor(secondsLeft / 60);
    var seconds = secondsLeft % 60;
    timerTextElement.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

function startTimer(timerName) {
    if (!isTimerRunning()) {
        var secondsLeft = 180; // 3 minutes

        function updateAndCheckTimer() {
            updateTimerText(secondsLeft);

            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                alert(timerName + ' ended');
                disableAllButtons();
            } else {
                secondsLeft--;
            }
        }

        updateAndCheckTimer();

        timerInterval = setInterval(updateAndCheckTimer, 1000);
    }
}

function handleButtonClick(buttonId) {
    if (isTimerRunning()) {
        // Perform button actions
        if (buttonId === 'firstButton') {
            activateSecondButton();
        } else if (buttonId === 'secondButton') {
            showQuestion();
        } else if (buttonId === 'thirdButton') {
            sayHelloToEveryone(); // New function call
        }

    } else {
        alert("The timer has ended. Buttons are disabled.");
    }
}

function sayHelloToEveryone() {
    alert("The potion contains 5 ingredients, the ingredient in Aladdin's cave in blue color ➡️ 🗡️❤️*Pay attention to the riddle here*");
    document.getElementById('b_4').style.display = 'inline-block';
    // Add any additional actions or logic you want for the third button here
}

document.getElementById('b_4').addEventListener('click', handleB4ButtonClick);//פונקצייה חשובה

function handleB4ButtonClick() {
    alert("OMG you are 1 hint away to get to the prize which is the next room There seems to be only one problem how you will get there"); // כאן אתה יכול לשנות את ההודעה לכל דבר שתרצה
    alert("Okay, so start looking for the 4 digits for success"); 
    document.getElementById('b_5').style.display = 'inline-block';
    document.getElementById('b_5').addEventListener('click', checkfive);
}
function checkfive() {
    showQuestion2()
}

function disableAllButtons() {
    buttons.forEach(function(button) {
        button.disabled = true;
    });
}

function isTimerRunning() {
    return timerInterval !== undefined;
}

function activateSecondButton() {
    alert("Hello and welcome to the evil queen's basement. Now we will give you a clue: your clue is an object because of which all the potions and spells exist. I hope you make it or something bad happens...");
    document.getElementById('secondButton').style.display = 'inline-block';
}


function showQuestion() {
    alert('Warm congratulations, you managed to pass the magic mirror stage. Now I will give you a hint to the first ingredient in the potion: 1) It is in a magic cave 2) Its color is blue 3) Its environment is Saudi Arabia');

    var answer = prompt('So where are we going to (which legan is this)?');

    if (answer && answer.toLowerCase() === 'aladdin') {
        alert('Correct! Aladdin is the answer. You should remember the number 8');
        alert("Wait!!!!! Before we go to Aladdin's cave, you have another clue in this room. Find it.");

        // Show the fourth button
        document.getElementById('b_3').style.display = 'inline-block';
    } else {
        lifes -= 1;
        alert(`Wrong answer. You have another ${lifes} lives left.`);

        if (lifes === 0) {
            alert("You failed the game 😭");
            disableAllButtons();
        } else {
            showQuestion();
        }
    }
}
function showQuestion2() {
    alert(' I have a feeling that you need a password to open me🤔');
    alert(' So write it....');

    var answer2 = prompt('what is the password');

    if (answer2 && answer2.toLowerCase() === '8514') {

        alert('GOOD BYYY YOU DID IT!!!!!!!!,DONT FORGET THAT THE EVIL QUEEN IS EVIL SO YOU HAVE TO MAKE IT BYY👋👋');
        window.location.href="../aladdinroom/al.html"



    } else {
        lifes -= 1;
        alert(`Wrong answer. You have another ${lifes} lives left.`);

        if (lifes === 0) {
            alert("You failed the game 😭");
            disableAllButtons();
        } else {
            showQuestion2();
        }
    }
}


