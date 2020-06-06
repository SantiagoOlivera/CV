//var contentItem = document.querySelectorAll('.content-item');
//console.log(contentItem[0].offsetTop);

/* contentItem.forEach(
    element => {
        element.addEventListener(
            "click",
            function(element){
                console.log(element);
                window.scrollTo({
                    top:  element.offsetTop - 250,
                    behavior: 'smooth'
                }); 
            }
        );
    }
); */


let hashSelected = null;
window.addEventListener(
    "hashchange",
    function(){   

        var contentItem = document.querySelector(window.location.hash);
        //console.log(contentItem);
        
        window.scrollTo({
            top:  contentItem.offsetTop - 250,
            behavior: 'smooth'
        });

        hashSelected = window.location.hash;

    }
);

var menuLinks = document.querySelectorAll('.menu-item-text p a');
//console.log(menuLinks);
menuLinks.forEach(
    element => {
        element.addEventListener(
            "click",
            (e)=>{
                //console.log(hashSelected);
                //console.log(element.getAttribute("href"));
                if(hashSelected!==null){
                    if(hashSelected === element.getAttribute("href")){
                        e.preventDefault();
                    }
                }
                    
            }
        );
    }
);
