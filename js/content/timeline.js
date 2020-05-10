//timeline Items
let timelineItemsContainer = document.querySelector('.timeline-items-container');

function getTimelineItemsHTMLText(timelineItems){
    
    console.log(timelineItems);
    var timelineItemsHTMLText = "";
    console.log(timelineItemsHTMLText);

    timelineItems.forEach(
        
        element => {
            
            timelineItemsHTMLText = ` ${timelineItemsHTMLText} 

                <div class="timeline-item-container">
                                                        
                    <div class="timeline-item">
                        
                        <div class="timeline-item-year">
                            <h1>${element.year}</h1>
                        </div>
                        <br>
                        <div class="timeline-item-title">
                            <h1>${element.title}</h1>
                        </div>
                        <br>
                        <div class="timeline-item-start">
                            <p>Inicio: ${element.startDate}</p>
                        </div>
                        <div class="timeline-item-end">
                            <p>Fin: ${element.endDate}</p>
                        </div>
                        <div class="timeline-item-time">
                            <p>Tiempo: 
                                ${ element.time.years  === 0 ? '' : element.time.years  + ' <span id="">años</span>'  } 
                                ${ element.time.months === 0 ? '' : element.time.months + ' <span id="">meses</span>' } 
                                ${ element.time.days   === 0 ? '' : element.time.days   + ' <span id="">dias</span>'  }
                            </p>
                        </div>
                        <br>
                        <div class="timeline-item-description">
                            ${ element.description }
                        </div>
                        <br>
                        <div class="timeline-item-programing-languages">
                            <h4>Herramientas utilizadas</h4>
                            <div class=" programing-language-item">
                                <div class="programing-language-logo">
                                    <img src="" alt="">
                                </div>
                                <div class="programing-language-title">
                            </div>

                            </div>
                        </div>

                    </div>
            </div>`;

        }

    );

    console.log(timelineItemsHTMLText);
    timelineItemsContainer.innerHTML = timelineItemsHTMLText;
    

}




//Observable timeline width
let fullContent = document.querySelector('.full-content');
let line = document.querySelector('.line');
let leftSideItems = document.querySelectorAll('.timeline-item');

const myObserver = new ResizeObserver(entries => {
    // iterate over the entries, do something.
    //console.log("cambio de tamaño:");
    //console.log(fullContent.clientWidth);
    //console.log(leftSideItems);
    if(fullContent.clientWidth<=800){

        line.classList.add('line-in-left-side');

        leftSideItems.forEach(
            function(element){
                element.classList.add('timeline-item-left');
            }
        ); 

    }else{

        line.classList.remove('line-in-left-side');
    
        leftSideItems.forEach(
            function(element){
                element.classList.remove('timeline-item-left');
            }
        ); 

    }
});

myObserver.observe(fullContent);
  


