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
            top:  window.innerWidth > 800 ? contentItem.offsetTop - 250 : contentItem.offsetTop - 130,
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


var menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(
    element => {
        element.addEventListener(
            "click", 
            (e) => { 
                //console.log(element.children[1].children[0].children[0].getAttribute('href'));
                
                
                    if(hashSelected!==null && hashSelected === element.getAttribute("href")){
                        e.preventDefault();
                    }else{
                        var contentItem = document.querySelector(element.children[1].children[0].children[0].getAttribute('href'));
                        //console.log(contentItem);
                        
                        window.scrollTo({
                            top:  window.innerWidth > 800 ? contentItem.offsetTop - 250 : contentItem.offsetTop - 130,
                            behavior: 'smooth'
                        });
                        
                        hashSelected = window.location.hash;
                        if(window.innerWidth<800){
                            openAndCloseNavContainer();
                        }
                    }
                }
            
        );
    }
);
