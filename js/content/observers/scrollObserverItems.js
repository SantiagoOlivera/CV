var  idioms = document.querySelector('#idioms');
var  idiomItems = document.querySelectorAll('.procentage-circle');


var  observerIdiomCircles = new IntersectionObserver(loadPorcentageCircles);

function loadPorcentageCircles(entries, observerIdiomCircles){

    for (entry of entries) {
        
        //console.log(entry);

        if (entry.isIntersecting) {
            
            cont = 0;

            idiomItems.forEach(
                element => {
                    
                    //data.objs.idioms[cont];
                    //level
                    // console.log(data.objs.idioms[cont].level);
                    // circle svg
                    //console.log(element.children[1]);
                    element.children[1].style.strokeDashoffset = `${( 880 - ( ( 440 *  Math.round(data.objs.idioms[cont].level) ) / 100 ) )}`;
                    cont++; 
                }
                    
            );
        }
    }
}

observerIdiomCircles.observe(idioms);


var knowledgesItems = document.querySelector('.knowledges');
var knowledgesPorcentageCircles = document.querySelectorAll('.knowledge-porcentage-circle');
var porcentageLineLoading = document.querySelectorAll('.porcentage-line-loading');

var observerKnowledgeCircle = new IntersectionObserver(loadKnowledgesPorcentageCircles);

function loadKnowledgesPorcentageCircles(entries, observerKnowledgeCircle){
    
    var cont = 0;

    for(entry of entries){
        
        if (entry.isIntersecting) {
            
            cont = 0;

            knowledgesPorcentageCircles.forEach(
                
                element => {
                    
                    element.children[1].style.strokeDashoffset = `${ ( 880 - ( ( 190 * Math.round(data.objs.knowledges[cont].level) ) / 100 ) ) } `;
                    cont++;

                }
                    
            );

            cont = 0;
            
            console.log(cont);
            console.log(data.objs.knowledges);

            porcentageLineLoading.forEach(
                element => {
                    element.style.width = `${ data.objs.knowledges[0].level }%`;
                    
                }
            );
            
        }
    }
}

observerKnowledgeCircle.observe(knowledgesItems);
 