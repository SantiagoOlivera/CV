var  idioms = document.querySelector('#idioms');
var  idiomItems = document.querySelectorAll('.procentage-circle');


var  observer = new IntersectionObserver(loadPorcentageCircles);

function loadPorcentageCircles(entries, observer){

    for (entry of entries) {
        
        console.log(entry);

        if (entry.isIntersecting) {
            
            cont = 0;

            idiomItems.forEach(
                element => {
                    
                    //data.objs.idioms[cont];
                    //level
                    // console.log(data.objs.idioms[cont].level);
                    // circle svg
                    //console.log(element.children[1]);
                    element.children[1].style.strokeDashoffset = `${( 880 - ( ( 440 * data.objs.idioms[cont].level ) / 100 ) )}`;
                    cont++; 
                }
                    
            );
        }
    }
}

observer.observe(idioms);