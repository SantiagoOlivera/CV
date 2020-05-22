let studiesContainer = document.querySelector('.studies-container');

function setStudiesItemsHTMLText(studies){
    

    var GenericFunctions = new GenericFunction();

    var studiesHTMLText = '';
    //idioms for months
    // 1 - spanish
    // 2 - english
    // 3 - german
    var idiom = 1;

    
    studies.forEach(element => {

        var programingToolsHTMLText = "";

        if(element.programingTools!==undefined){


            element.programingTools.forEach(
                    
                    element => {

                        programingToolsHTMLText =  ` ${programingToolsHTMLText} 
                        
                        <div class="programing-tool-item">
                            <div class="programing-tool-title">
                                ${element.title}
                            </div>
                        </div>`            
                    }
            )
        }


        studiesHTMLText = ` ${studiesHTMLText}

            <div class="study-item">
                <div class="study-container-item">                           
                    <div class="study-item-name">
                        <h1>
                            <span>
                                ${element.title}
                            </span>
                        </h1>
                    </div>
                    <br>
                    <div class="study-item-type">
                        <p>
                            <span>
                                ${element.type}
                            </span>
                        </p>
                    </div>
                    <br>
                    <div class="study-item-state">
                        <p>
                            <span>
                                ${element.state}
                            </span>
                        </p>
                    </div>
                    <br>
                    <div class="study-item-start">
                        <p>
                            <span>
                                Inicio:
                            </span>
                            <span>
                                ${ GenericFunctions.getMonthName( element.startDate.getMonth() + 1 , idiom ) }
                                ${ element.startDate.getFullYear() }
                            </span>
                        </p>
                    </div>
                    <div class="study-item-end">
                        <p>
                            <span>
                                Fin:
                            </span>
                            <span>
                                ${ GenericFunctions.getMonthName( element.endDate.getMonth() + 1 , idiom ) }
                                ${ element.endDate.getFullYear() }
                            </span>
                        </p>
                    </div>
                    <div class="study-item-time">
                        <p>
                            <span>
                                Tiempo:
                            </span>
                            <span>
                                ${ element.time.years  === 0 ? '' : element.time.years  + ' <span idTranslate="">años</span>'  } 
                                ${ element.time.months === 0 ? '' : element.time.months + ' <span idTranslate="">meses</span>' } 
                                ${ element.time.days   === 0 ? '' : element.time.days   + ' <span idTranslate="">dias</span>'  }
                            </span>
                        </p>
                    </div>
                    <br>
                    <div class="study-item-description">
                        <p>
                            <span>
                                ${element.description}
                            </span>
                        </p>
                    </div>
                    <br>
                    <div class="study-item-programming-tools">
                        <h4><span>Herramientas de Programacion utilizadas</span></h4>
                        ${ programingToolsHTMLText }
                    </div>
                </div>
        </div> `;
    });

    studiesContainer.innerHTML = studiesHTMLText ;

}