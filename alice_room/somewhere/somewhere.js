function answear(){
    var div = document.getElementById("incorrect");
    var divb = document.getElementById("correct");
    var inp = document.getElementById("fchance").value;
    if (inp=="flat") {
        divb.style.display = "block";
    }else{
        div.style.display = "block";
    }
}
function take(){
    var divc = document.getElementById("riddle");
    divc.style.display = "none";
}