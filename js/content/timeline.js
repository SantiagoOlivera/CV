//timeline Items
let timelineItemsContainer = document.querySelector('.timeline-items-container');


function setTimelineItemsHTMLText(timelineItems){
    
    //console.log(timelineItems);
    var timelineItemsHTMLText = "";
    //console.log(timelineItemsHTMLText);

    var GenericFunctions = new GenericFunction();
    

    var cont = 0;


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
                                                        
                    <div class="timeline-item"  index="${cont}">
                        
                        <div class="timeline-item-year">
                            <h1>${element.year}</h1>
                        </div>
                        <br>
                        <div class="timeline-item-title">
                            <h1>
                                <span idTranslate="${element.title[1]}">
                                    ${element.title[0]}
                                </span>
                            </h1>
                        </div>
                        <br>
                        <div class="timeline-item-start">
                            <p>
                                <span idTranslate="18">Inicio</span>:
                                    <span idTranslate="${ GenericFunctions.getMonthName( element.startDate.getMonth() + 1 ).idTranslate }">
                                        ${ GenericFunctions.getMonthName( element.startDate.getMonth() + 1 ).name } 
                                    </span> 
                                    ${ element.startDate.getFullYear() } 
                            </p>
                        </div>
                        <div class="timeline-item-end">
                            <p>
                            <span idTranslate="19">Fin</span>:
                                <span idTranslate="${ GenericFunctions.getMonthName( element.endDate.getMonth() + 1).idTranslate }"> 
                                    ${ GenericFunctions.getMonthName( element.endDate.getMonth() + 1 ).name } 
                                </span>
                                ${ element.endDate.getFullYear() }
                            </p>
                        </div>
                        <div class="timeline-item-time">
                            <p><span idTranslate="17">Tiempo</span>: 
                                ${  
                                    element.time.years  === 0 ? '' : 
                                    element.time.years === 1 ? element.time.years  + ' <span idTranslate="15">año</span>':
                                    element.time.years  + ' <span idTranslate="16">años</span>'
                                } 
                                ${ 
                                    element.time.months === 0 ? '' :
                                    element.time.months === 1 ? element.time.months + ' <span idTranslate="20">mes</span>':
                                    element.time.months + ' <span idTranslate="21">meses</span>' 
                                } 
                                ${ 
                                    element.time.days === 0 ? '' : 
                                    element.time.days === 1 ? element.time.days + ' <span idTranslate="22">dia</span>':
                                    element.time.days + ' <span idTranslate="23">dias</span>'
                                }
                            </p>
                        </div>
                        <br>
                        <div class="timeline-item-description">
                                <span idTranslate="${ element.description[1] }">
                                    ${ element.description[0] }
                                </span>
                        </div>
                        <br>
                        <h4>
                            <span idTranslate="24">
                                Lenguajes de Programación utilizados
                            </span>
                        </h4>
                        <div class="timeline-item-programing-languages">
                            
                            ${programingToolsHTMLText}
                                
                        </div>

                    </div>
            </div>`;

            cont++;

        }

    );

    //console.log(timelineItemsHTMLText);
    timelineItemsContainer.innerHTML = timelineItemsHTMLText;
    
    

}


  


