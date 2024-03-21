function rapunzelSpeech(){
    alert("Rapunzel: Congrats you made it to the third room🌺 \nMay you help me find my painting? It must be somewhere in this room...")
    document.getElementById("rapunzelAi").style.display='none';
}

function foundPainting(){
    var question = prompt("What is Rapunzel's powers?\n 1) The ability of making people younger \n 2) The ability of making other people's dreams come tru \n 3) The ability of glowing her hair while singing \n 4) The ability of healing the sick and wounded and restoring life to those who are about to die or fallen uncounscious");
    question;
    if (question.value=="4"){
        alert("Correct! The code is 5231!");
    }

    else if(question.value != "4"){
        alert("Wrong! Try again");
        // foundPainting();
    }
}

//stopped: trying to get the value of the prompt and check it