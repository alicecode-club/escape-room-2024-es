function answear(){
    var div = document.getElementById("incorrect");
    var divb = document.getElementById("correct");
    var inp = document.getElementById("fchance").value;
    var bn = document.getElementById("send");
    if (inp=="flat") {
        divb.style.display = "block";
    }else{
        div.style.display = "block";
    }
    bn.style.display = "none";
}
function answearb(){
    var divc = document.getElementById("incorrectb");
    var divd = document.getElementById("correctb");
    var inp = document.getElementById("schance").value;
    var bn = document.getElementById("sendb");
    if (inp=="heart" || inp=="a heart") {
        divd.style.display = "block";
    }else{
        divc.style.display = "block";
    }
    bn.style.display = "none";
}
function take(){
    window.location.href = '../alicesecond copy/alicesecond.html';
}
function rids(){
    var divd = document.getElementById("riddle");
    var dive = document.getElementById("riddleb");
    divd.style.display = "none";
    dive.style.display = "block";
}
function wonder() {
    window.location.href = '../alicesecond copy/alicesecond.html';
}