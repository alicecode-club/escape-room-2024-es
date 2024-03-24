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
    alert("You picked up one of the ingredients, good job")
    alert("To know where you need to go now you need to find:💀🪨")
    localStorage.setItem("waterCollcted", true);
}

if(localStorage.getItem("hookShip")==="true"){
    document.getElementById ('Hook').style.display ='none';
    document.getElementById('hookShip').style.display = 'inline-block';    
}

if(localStorage.getItem("jollyPoup")==="true"){
    document.getElementById ('Hook').style.display ='none';
    document.getElementById('mermaid').style.display = 'inline-block';    
}
