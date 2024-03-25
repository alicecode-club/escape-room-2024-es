var lifes = 3;
localStorage.setItem("peterroom", true);
document.getElementById ('correct').style.display ='none';
document.getElementById ('incorrect').style.display ='none';
function jolly(){
    var corr = document.getElementById("correct");
    var roger = document.getElementById("jolly_roger").value;
    localStorage.setItem("hookShip", true);
    if (roger=='jolly roger'){
        corr.style.display = 'block';
        document.getElementById ('incorrect').style.display ='none';
    }
    else{
        document.getElementById ('incorrect').style.display = 'block'; 
        document.getElementById ('correct').style.display ='none';
    }
}

function con(){
    document.getElementById ('Hook').style.display ='none';  
    document.getElementById('hookShip').style.display = 'inline-block';  
}

function sec(){
    document.getElementById ('incorrect').style.display ='none';    
}

function itemsup(){
    window.location.href='../items/items.html'

}

function HookPoPup(){
    localStorage.setItem("jollyPoup", true);
    alert("Welcome to Jolly Roger Captain Hook's ship!")
    alert("The next ingredient you are looking for is blue watery but you can only get it from where mermaids live")
    localStorage.setItem("waterCollcted", false);
    document.getElementById('mermaid').style.display = 'inline-block';
}

function mermaidPoPup(){
    localStorage.setItem("mermaidSave", true);
    alert("You picked up one of the ingredients, good job")
    alert("To know where you need to go now you need to find:💀🪨")
    localStorage.setItem("waterCollcted", true);
    document.getElementById('skull').style.display = 'inline-block';
}

function disableAllButtons() {
    buttons.forEach(function(button) {
        button.disabled = true;
    });
}

function skullPoPup(){
    localStorage.setItem("skullSave", true);
    alert("Welcome to the skull rock and the last clue that will lead you to escape from neverland")
    alert("The place where you will collect the last clue is a muddy place inhabited by green creatures")
    var answer3 = prompt('So where are we going to (which legan is this)?');
    if (answer3 && answer3.toLowerCase() === 'sherk') {
        alert('Correct! sherk is the answer. You need to go to to the swamp of sherk');
        window.location.href="../shrek_room/shreck_room.html"
        
    } else {
        lifes -= 1;
        alert(`Wrong answer. You have another ${lifes} lives left.`);

        if (lifes === 0) {
            alert("You failed the game 😭");
            disableAllButtons()
        } else {
            skullPoPup();
    }
}}



if(localStorage.getItem("hookShip")==="true"){
    document.getElementById ('Hook').style.display ='none';
    document.getElementById('hookShip').style.display = 'inline-block';    
}

if(localStorage.getItem("jollyPoup")==="true"){
    document.getElementById('mermaid').style.display = 'inline-block';    
}

if(localStorage.getItem("mermaidSave")==="true"){
    document.getElementById('skull').style.display = 'inline-block';    
}
