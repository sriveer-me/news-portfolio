function toggleNavMenu(){
    if(menuOpen.checked === true){
        menuOpen.checked = false;
        document.body.style.overflowY = "auto";
    }
    else{
        menuOpen.checked = true;
        document.body.style.overflowY = "hidden";
    }
}

let menuOpen = document.getElementById("hamburger-checkbox");
document.getElementById("blinder").addEventListener("click",toggleNavMenu);