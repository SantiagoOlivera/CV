var openAndCloseNav = document.querySelector('#openAndCloseNav');
var navContainer = document.querySelector('.nav');
var menuContainer =document.querySelector('.menu-container');
//var nav = document.querySelector('.nav');
//var navHeaderOpenClose = document.querySelector('.nav-header-open-close');

openAndCloseNav.addEventListener(
    "click",
    () => {
        
        //navContainer.classList.toggle('nav-container-open');
        if(navContainer.getAttribute("open")==="true"){
            navContainer.style.width = 0;
            menuContainer.style.position = "static";
            menuContainer.style.width = 0;
            navContainer.setAttribute("open", "false");
        }else{
            
            menuContainer.style.position = "fixed";
            menuContainer.style.width = "30%";

            if(window.innerWidth <= 700){
                navContainer.style.display = "100%";
            }else{
                navContainer.style.width = "33.33%";
            }
            navContainer.setAttribute("open", "true");
        }

        //nav.classList.toggle('nav-close');
        //navHeaderOpenClose.classList.toggle('nav-header-close');

        /* if(openAndCloseNav.textContent==='close'){
            openAndCloseNav.textContent = 'menu';
        }else{
            openAndCloseNav.textContent = 'close';
        } */
    }
);
    
