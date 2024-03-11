function lampPopup(){
    alert("hello and welcome to aladdin cave")
    alert("Here you will collect the next ingredient for the evil queen's potion ")
    alert("Just before you go searching you should know that the ingredient you are collecting is glowing and blue ")
}

var crystalCollcted=false
function crystalPopup(){
    alert("You picked up the first ingredient, good job")
    alert("For the clue to the next location of the ingredients that you need to find, you need to find the gold face 💛")
    crystalCollcted=true
    console.log(crystalCollcted)
}

function itemsup(){
    window.location.href='../items/items.html'
}

function facePopup(){
    alert("You found me!!")
    alert("The next potion ingredient is in a muddy place with green creatures")
    var answer = prompt('So where are we going to (which legan is this)?');
    if (answer && answer.toLowerCase() === 'shrek') {
        alert('Correct! shrek is the answer. You should remember the number 3');
    } else {
        alert("Wrong answer. try agian");
        facePopup(); 
    }
}