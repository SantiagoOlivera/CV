//scroll observer idioms
var  idioms = document.querySelector('#idioms');
var  idiomItems = document.querySelectorAll('.idiom-card');


var  observerIdiomCircles = new IntersectionObserver(
    loadIdiomsPorcentageCircles,
    {threshold: 0.5}
);

function loadIdiomsPorcentageCircles(entries, observerIdiomCircles){

    for (entry of entries) {
        
        

        if (entry.isIntersecting) {
            
            cont = 0;



            idiomItems.forEach(
                element => {

                    var porcentage = element.children[0].children[0].children[1].children[0].children[0].textContent;
                    var circle = element.children[0].children[0].children[2].children[0].children[1];
                    
                    //data.objs.idioms[cont];
                    //level
                    // console.log(data.objs.idioms[cont].level);
                    // circle svg
                    //console.log(element.children[1]);

                    new GenericFunction().counter(
                        element.children[0].children[0].children[1].children[0].children[0],
                        0,
                        element.children[0].children[0].children[1].children[0].children[0].textContent,
                        1500
                    );

                    

                    
                    circle.style.strokeDashoffset = `${( 880 - ( ( 440 *  Math.round(porcentage) ) / 100 ) )}`;


                }
                    
            );
        }
    }
}

observerIdiomCircles.observe(idioms);



//scroll observer knowledges
var knowledgesItems = document.querySelector('.knowledges');
var knowledgesPorcentageCircles = document.querySelectorAll('.knowledge-porcentage-circle');
var knowledges = document.querySelectorAll('.knowledge-item');


var observerKnowledgeCircle = new IntersectionObserver(
    loadKnowledgesPorcentageCircles,
    {threshold: 0.5}
);


function loadKnowledgesPorcentageCircles(entries, observerKnowledgeCircle){

    
    var porcentageLines = null;
    
    entries.forEach(
        
        entry => {


            
            
            if (entry.isIntersecting) {

                //console.log(entry.target);
                var knowledgesIndex = entry.target.getAttribute('index');
                //console.log(knowledgesIndex);

               //console.log(entry.target.children[0].children[1].children[1].children[1]);
               //porcentage cirlce load
               entry.target.children[0].children[1].children[1].children[1].style.strokeDashoffset = `${ 
                   ( 880 - ( ( 190 * Math.round(data.objs.knowledges[knowledgesIndex].level) ) / 100 ) ) 
                } `;
               
                //console.log(entry.target.children[0].children[1].children[0].children[0].children[0].textContent);

                //Efecto Counter
                new GenericFunction().counter(
                    entry.target.children[0].children[1].children[0].children[0].children[0],
                    0,
                    entry.target.children[0].children[1].children[0].children[0].children[0].textContent,
                    2000
                );

               /* porcentageLines = document.querySelectorAll(
                   ' .knowledge-container > :nth-child(' +  knowledgesIndex+1  + ')'+
                   ' .knowledge-item-container'+ 
                   ' .knowledge-programming-tools'+ 
                   ' .porcentage-line'
               ); */
               
               porcentageLines = [].slice.call(entry.target.children[0].children[2].children);

               //console.log(porcentageLines);
               
               
               var i = 0;
               porcentageLines.forEach(
                   element => {
                       if (element.classList[0]==="porcentage-line"){

                            //Efecto Counter
                            new GenericFunction().counter(
                                element.children[0].children[0],
                                0,
                                //numero hasta el detiene que es el impreso en knowledges
                                element.children[0].children[0].textContent,
                                700
                            );
        
                            //console.log(element.children[0].children[0].textContent);
                            element.children[1].style.width = `${ data.objs.knowledges[knowledgesIndex].programingTools[i].level }%`;
                            i++;
                       }
                   }
               );
                   
               observerKnowledgeCircle.unobserve(entry.target);
            }
        }
    );


}


//init observers
knowledges.forEach(
    element => {
        observerKnowledgeCircle.observe(element);
    }
);


//scroll observer timeline
var timelineItems = document.querySelectorAll('.timeline-item');

var observerSlideTimelineItem = new IntersectionObserver(
    slideTimelineItem,
    {threshold: 0.5}
);

function slideTimelineItem(entries,observerSlideTimelineItem){
    //console.log(entries);
    //console.log(entry.target.getAttribute('index'));
    entries.forEach(
        entry => {

            if(entry.isIntersecting){
                //console.log(entry);
                timelineItem = entry.target;
                //console.log(timelineItem);
                if(timelineItem.getAttribute('index')%2===0){
                    timelineItem.classList.add('timeline-item-animation');
                }else{
                    timelineItem.classList.add('timeline-item-even-animation');
                }


            }
        }
    );
    
}

timelineItems.forEach(
    element => {
        observerSlideTimelineItem.observe(element);
    }
);