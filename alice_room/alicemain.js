function inpoc(){
    var div = document.getElementById("info");
    div.style.display = "none";
}
function inpoo(){
    var div = document.getElementById("info");
    div.style.display = "block";
}
function tunnel() {
    var a=document.body.style.backgroundImage = "url('https://miro.medium.com/v2/resize:fit:1120/1*5QhRolKeDY9qTKSgIX5WUw.png')";
    a.setAttribute("class", "back");
}
function card(imgSrc) {
    var newImg = document.createElement('img');
    newImg.src = imgSrc;
    newImg.setAttribute("class", "img");
    document.body.appendChild(newImg);
    button.disabled = true;
}
function key(){

}