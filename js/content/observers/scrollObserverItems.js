//scroll observer idioms
var  idioms = document.querySelector('#idioms');
var  idiomItems = document.querySelectorAll('.procentage-circle');


var  observerIdiomCircles = new IntersectionObserver(
    loadIdiomsPorcentageCircles,
    {threshold: 0.5}
);

function loadIdiomsPorcentageCircles(entries, observerIdiomCircles){

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


            //console.log(entry);
            
            if (entry.isIntersecting) {

                //console.log(entry.target);
                var knowledgesIndex = entry.target.getAttribute('index');
                //console.log(knowledgesIndex);

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

               //console.log(porcentageLines);
               
               var i = 0;
               porcentageLines.forEach(
                   element => {
                       if (element.classList[0]==="porcentage-line"){
                            element.children[1].style.width = `${ data.objs.knowledges[knowledgesIndex].programingTools[i].level }%`;
                            i++;
                       }
                   }
               );
                   
                
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