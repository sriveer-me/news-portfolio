let menuOpen = document.getElementById("hamburger-checkbox");

function toggleNavMenu(){
    isMenuOpen()?closeMenu():openMenu();
}

function closeMenu(){
    menuOpen.checked = false;
    document.body.style.overflowY = "auto";
}
function openMenu(){
    menuOpen.checked = true;
    document.body.style.overflowY = "hidden";
}
function isMenuOpen(){
    return menuOpen.checked;
}

document.getElementById("blinder").addEventListener("click",toggleNavMenu);
menuOpen.addEventListener("input",(e) => {
    if(e.target.checked === true)
        openMenu();
    else closeMenu();
});

window.addEventListener("resize",function(){
    console.log("resized");
    if(document.body.clientWidth >= 1200 && isMenuOpen())
        closeMenu();
})