localStorage.setItem("peterroom", true);
document.getElementById ('correct').style.display ='none';
document.getElementById ('incorrect').style.display ='none';
function jolly(){
    var corr = document.getElementById("correct");
    var roger = document.getElementById("jolly_roger").value;
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
    alert("it work")
}