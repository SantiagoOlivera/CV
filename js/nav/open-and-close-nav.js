var openAndCloseNav = document.querySelector('#openAndCloseNav');
var navContainer = document.querySelector('.nav');
var menuContainer = document.querySelector('.menu-container');
//var nav = document.querySelector('.nav');
//var navHeaderOpenClose = document.querySelector('.nav-header-open-close');

openAndCloseNav.addEventListener(
    "click",
    () => {
        openAndCloseNavContainer();
    }
);

/* navContainer.addEventListener(
    "click", 
    ()=>{ 
        openAndCloseNavContainer();
    }
); */

function openAndCloseNavContainer(){
        navContainer.classList.toggle("close");
        menuContainer.classList.toggle("close");
}