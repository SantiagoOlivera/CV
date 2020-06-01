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



window.addEventListener(
    "hashchange",
    function(){   

        var contentItem = document.querySelector(window.location.hash);
        //console.log(contentItem);
        
        window.scrollTo({
            top:  contentItem.offsetTop - 250,
            behavior: 'smooth'
        });

        
        window.location.href.split('#')[0];
        //console.log(window.location.hash);
        console.log(window.location);
        //console.log(window.location.href);
        //console.log(window.location.origin);
        //window.location.href = window.location.origin;
    }
);

/* var menuLinks = document.querySelectorAll('.menu-item-text p a');
console.log(menuLinks);
menuLinks.forEach(
    element => {
        element.addEventListener(
            "click",
            (e)=>{
                
               
                
                //element.setAttribute("href","#");
                //console.log(element.getAttribute("href")); 
            }
        );
    }
); */
