var audioa = new Audio('sounda.mpeg');
function audio(){
    if (audioa && !audioa.paused) {
        audioa.pause();
    } else {
        audioa = new Audio('sounda.mpeg');
        audioa.play();
    }
}
function inpoc(){
    var div = document.getElementById("info");
    div.style.display = "none";
}
function inpoo(){
    var div = document.getElementById("info");
    div.style.display = "block";
}
function tunnel() {
    var a=document.body.style.backgroundImage = "url('alice_img/tunnel.png')";
    a.setAttribute("class", "back");
}
function card(imgSrc) {
    var newImg = document.createElement('img');
    newImg.src = imgSrc;
    newImg.setAttribute("class", "imga");
    document.body.appendChild(newImg);
}
function key(){
    var newdiv = document.createElement('div');
    newdiv.setAttribute("class", "diva");
    var newHeading = document.createElement('h2');
    newHeading.textContent ="what is the code?";
    newHeading.setAttribute("id", "h2");
    var newInput = document.createElement('input');
    newInput.setAttribute("id", "input");
    var newbr = document.createElement('br');
    var newbr2 = document.createElement('br');
    var newButton = document.createElement('button');
    newButton.textContent ="send";
    newButton.setAttribute("id", "button");
    newdiv.appendChild(newHeading);
    newdiv.appendChild(newInput);
    newdiv.appendChild(newbr);
    newdiv.appendChild(newbr2);
    newdiv.appendChild(newButton);
    document.body.appendChild(newdiv);
}