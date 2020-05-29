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
//var porcentageLineLoading = document.querySelectorAll('.porcentage-line-loading');
var knowledges = document.querySelectorAll('.knowledge-item');


var observerKnowledgeCircle = new IntersectionObserver(loadKnowledgesPorcentageCircles);



function loadKnowledgesPorcentageCircles(entries, observerKnowledgeCircle){

    var porcentageLines = null;
    console.log(porcentageLines);
    
    entries.forEach(
        
        entry => {


            //console.log(entry);
            
            if (entry.isIntersecting) {

                //console.log(entry.target);
                var knowledgesIndex = entry.target.getAttribute('index');
                console.log(knowledgesIndex);

               //console.log(entry.target.children[0].children[1].children[1].children[1]);
               //porcentage cirlce load
               entry.target.children[0].children[1].children[1].children[1].style.strokeDashoffset = `${ 
                   ( 880 - ( ( 190 * Math.round(data.objs.knowledges[knowledgesIndex].level) ) / 100 ) ) 
                } `;
               

               /* porcentageLines = document.querySelectorAll(
                   ' .knowledge-container > :nth-child(' +  knowledgesIndex+1  + ')'+
                   ' .knowledge-item-container'+ 
                   ' .knowledge-programming-tools'+ 
                   ' .porcentage-line'
               ); */
               
               porcentageLines = [].slice.call(entry.target.children[0].children[2].children);

               console.log(porcentageLines);
               
               var i = 0;
               porcentageLines.forEach(
                   element => {
                       if (element.classList[0]==="porcentage-line"){
                            element.children[1].style.width = `${ data.objs.knowledges[knowledgesIndex].programingTools[i].level }%`;
                            i++;
                       }
                   }
               );
               
               
               //console.log(porcentageLines);
            
                

               /* porcentageLines.forEach(
                   element => {
                       element.children[1].style.width = data.objs.knowledges[knowledgesIndex].programingTools[i].level + '%';
                       i++;
                   }
               ); */
               
               
               
               
               //console.log(entry.target.children[0].children[2].children);
               
               
               /* entry.target.children[0].children[2].children.forEach(
                    element =>{
                        if(element.classList[0]==="porcentage-line"){
                            element.style.width = "100%";
                        }
                    }
               ); */
               /* entry.target.children[0].children[1].children[1].programingTools.forEach(
                   element => {
                       console.log(element);
                       //element.style.width = "100%";
                   }
               ); */
            
    
                    
                        
                
            }
        }
    );

    /* var cont = 0;

    for(entry of entries){

        console.log(entry);
        
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
            console.log(knowledgesPorcentageCircles);

            /knowledgesPorcentageCircles.forEach(
                element => {

                    element.style.width = `${ 
                        data.objs.knowledges[cont].programmingTools.forEach(
                            element => {
                                
                            }
                        )
                     }%`;

                    cont++;
                    
                }
            );  
            
        }
        
    }
    */

    

}


//init observers

knowledges.forEach(
    element => {
        observerKnowledgeCircle.observe(element);
    }
);
 