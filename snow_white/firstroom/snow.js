var timerTextElement = document.getElementById('timerText');
var buttons = document.querySelectorAll('button');
var timerInterval;
var lifes = 3;

window.onload = function() {
    startTimer('The Timer');
};

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
        }
    } else {
        alert("The timer has ended. Buttons are disabled.");
    }
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
    alert('Warm congratulations, you managed to pass the magic mirror stage. Now I will give you a hint to the first ingredient in the potion: 1) It is in a magic cave 2) Its color is blue 3) Its environment is Saudi Arabia!');
    
    var answer = prompt('So where are we going to (which legan is this)?');

    if (answer && answer.toLowerCase() === 'aladdin') {
        alert('Correct! Aladdin is the answer. You should remember the number 8');
        alert("wait!!!!! before we go to aladdin's cavie you have anther clue in this room find it")
    } else {
        lifes -= 1;
        alert(`Wrong answer. You have another ${lifes} lives left.`);
        
        if (lifes === 0) {
            alert("You failed the game 😭");
            disableAllButtons(); // ניעול את הכפתורים כאן
        } else {
            showQuestion();
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("playButton").addEventListener("click", function() {
        document.getElementById("video-container").style.display = "block";
        document.getElementById("playButton").style.display = "none";

        var video = document.querySelector("#video-container iframe");

        video.addEventListener("ended", function() {
            window.location.href = "main_snow.html";
        });
    });
});

function playVideo() {
    var videoContainer = document.getElementById('video-container');
    var videoFrame = document.getElementById('videoFrame');
    
    videoFrame.src += "?autoplay=1"; // נוסיף את פרמטר האוטומטי פליי
    videoContainer.style.display = 'block';
}
function activateSecondButton() {
    alert("Hello and welcome to the evil queen's basement. Now we will give you a clue: your clue is an object because of which all the potions and spells exist. I hope you make it or something bad happens...");
    document.getElementById('secondButton').style.display = 'inline-block';

    // Show the third button
    document.getElementById('b_3').style.display = 'inline-block';
}
