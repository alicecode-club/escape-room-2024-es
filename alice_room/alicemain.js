function inpoo(){
    var div = document.getElementById("info");
    div.style.display = "none";
}
function inpoc(){
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
}
function cardc() {
    var img = document.createElement('img');
    img.src = 'https://cdn.pixabay.com/photo/2012/04/11/13/34/ten-28256_960_720.png';
    document.body.appendChild(img);
    a.setAttribute("class", "img");
}