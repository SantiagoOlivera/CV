function openAndCloseNav(){

    var openAndCloseNav = document.querySelector('#openAndCloseNav');
    var navContainer = document.querySelector('.nav-container');
    var nav = document.querySelector('.nav');
    var navHeaderOpenClose = document.querySelector('.nav-header-open-close');

    openAndCloseNav.addEventListener(
        "click",
        () => {
            
            navContainer.classList.toggle('nav-container-close');
            nav.classList.toggle('nav-close');
            navHeaderOpenClose.classList.toggle('nav-header-close');

            if(openAndCloseNav.textContent==='close'){
                openAndCloseNav.textContent = 'menu';
            }else{
                openAndCloseNav.textContent = 'close';
            }
        }
    );
    
}