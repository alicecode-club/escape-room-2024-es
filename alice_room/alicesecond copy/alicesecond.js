var audioa = new Audio('../sounda.mpeg');
function audio(){
    if (audioa && !audioa.paused) {
        audioa.pause();
    } else {
        audioa = new Audio('../sounda.mpeg');
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
function hole(){
    window.alert("already been there...");
}
function castle(){
    window.location.href = '../castle/castle.html';
}
function hat(){
    var div = document.getElementById("hata");
    div.style.display = "block";
}
function hatc(){
    var div = document.getElementById("hata");
    div.style.display = "none";
}