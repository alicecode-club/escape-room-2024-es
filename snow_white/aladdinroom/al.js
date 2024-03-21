var lifes = 3;
localStorage.setItem("aladdinRoom", true);
function lampPopup(){
    localStorage.setItem("crystalCollcted", false);
    alert("hello and welcome to aladdin cave")
    alert("Here you will collect the next ingredient for the evil queen's potion ")
    alert("Just before you go searching you should know that the ingredient you are collecting is glowing and blue ")
    document.getElementById('crystalButton1').style.display = 'inline-block';
    document.getElementById('crystalButton2').style.display = 'inline-block';
    document.getElementById('crystalButton3').style.display = 'inline-block';
}

console.log(localStorage.getItem("crystalCollcted"))
function crystalPopup(){
    alert("You picked up the first ingredient, good job")
    alert("For the clue to the next location of the ingredients that you need to find, you need to find the gold face 💛")
    localStorage.setItem("crystalCollcted", true);
    console.log(localStorage.getItem("crystalCollcted"))
    document.getElementById('faceButton').style.display = 'inline-block';
}

function itemsup(){
    window.location.href='../items/items.html'
}

function facePopup(){
    alert("You found me!!")
    alert("The next potion ingredient is in this legan- Who was taken to the castle because her father brought her a rose")
    var answer = prompt('So where are we going to (which legan is this)?');
    if (answer && answer.toLowerCase() === 'beauty and the beast') {
        alert('Correct! beauty and the beast is the answer. You need to go to beauty and the beast castle');
        window.location.href="../beautyandthebeastroom/beauty.html"
        
    } else {
        lifes -= 1;
        alert(`Wrong answer. You have another ${lifes} lives left.`);

        if (lifes === 0) {
            alert("You failed the game 😭");
            disableAllButtons()
        } else {
            facePopup();
    }
}}

function disableAllButtons() {
    buttons.forEach(function(button) {
        button.disabled = true;
    });
}