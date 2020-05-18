//timeline Items
let timelineItemsContainer = document.querySelector('.timeline-items-container');

function setTimelineItemsHTMLText(timelineItems){
    
    


    //console.log(timelineItems);
    var timelineItemsHTMLText = "";
    //console.log(timelineItemsHTMLText);

    var GenericFunctions = new GenericFunction();
    
    //idioms for months
    // 1 - spanish
    // 2 - english
    // 3 - german
    var idiom = 1;


    timelineItems.forEach(
        
        element => {
            
            var programingToolsHTMLText = ""; 
            
            if(element.programingTools!==undefined){


                element.programingTools.forEach(
                        
                        element => {

                            programingToolsHTMLText =  ` ${programingToolsHTMLText} 
                            
                            <div class="programing-language-item">
                                <div class="programing-language-title">
                                    ${ element.title }
                                </div>
                            </div>`            
                        }
                )
            }
            

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
                            <p>
                                Inicio: 
                                    ${ GenericFunctions.getMonthName( element.startDate.getMonth() + 1 , idiom ) } 
                                    ${ element.startDate.getFullYear() } 
                            </p>
                        </div>
                        <div class="timeline-item-end">
                            <p>Fin:
                                ${ GenericFunctions.getMonthName( element.endDate.getMonth() + 1 , idiom ) } 
                                ${ element.endDate.getFullYear() }
                            </p>
                        </div>
                        <div class="timeline-item-time">
                            <p>Tiempo: 
                                ${ element.time.years  === 0 ? '' : element.time.years  + ' <span idTranslate="">años</span>'  } 
                                ${ element.time.months === 0 ? '' : element.time.months + ' <span idTranslate="">meses</span>' } 
                                ${ element.time.days   === 0 ? '' : element.time.days   + ' <span idTranslate="">dias</span>'  }
                            </p>
                        </div>
                        <br>
                        <div class="timeline-item-description">
                                ${ element.description }
                        </div>
                        <br>
                        <h4>Herramientas utilizadas</h4>
                        <div class="timeline-item-programing-languages">
                            
                            
                            ${programingToolsHTMLText}
                                
                        </div>

                    </div>
            </div>`;

        }

    );

    //console.log(timelineItemsHTMLText);
    timelineItemsContainer.innerHTML = timelineItemsHTMLText;
    
    

}


  


