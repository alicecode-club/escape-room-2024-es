document.getElementById('item1').style.display='none'
document.getElementById('item2').style.display='none'
console.log(!!localStorage.getItem("crystalCollcted"),typeof !!localStorage.getItem("crystalCollcted"))

if(localStorage.getItem("crystalCollcted")==="true"){
    document.getElementById('item1').style.display='block'
    console.log("you have crystal")
}

if(localStorage.getItem("waterCollcted")==="true"){
    document.getElementById('item2').style.display='block'
    console.log("you have water")
}



function bake(){
    if(localStorage.getItem("peterroom")==="true"){
        window.location.href='../peterRoom/peter.html'
    }
    else if(localStorage.getItem("aladdinRoom")==="true"){
        window.location.href='../aladdinroom/al.html'
    }
}