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
                            <span idTranslate="${element.title[1]}">
                                ${element.title[0]}
                            </span>
                        </h1>
                    </div>
                    <br>
                    <div class="study-item-type">
                        <p>
                            <span idTranslate="${element.type[1]}">
                                ${element.type[0]}
                            </span>
                        </p>
                    </div>
                    <br>
                    <div class="study-item-state">
                        <p>
                            <span idTranslate="${element.state[1]}">
                                ${element.state[0]}
                            </span>
                        </p>
                    </div>
                    <br>
                    <div class="study-item-start">
                        <p>
                            <span idTranslate="18">
                                Inicio
                            </span>:
                            <span idTranslate="${ GenericFunctions.getMonthName( element.startDate.getMonth() + 1 ).idTranslate }">
                                ${ GenericFunctions.getMonthName( element.startDate.getMonth() + 1 ).name }
                            </span>
                                ${ element.startDate.getFullYear() }
                        </p>
                    </div>
                    <div class="study-item-end">
                        <p>
                            <span idTranslate="19">
                                Fin
                            </span>:
                            <span idTranslate="${ GenericFunctions.getMonthName( element.endDate.getMonth() + 1  ).idTranslate }">
                                ${ GenericFunctions.getMonthName( element.endDate.getMonth() + 1  ).name }
                            </span>
                                ${ element.endDate.getFullYear() }
                        </p>
                    </div>
                    <div class="study-item-time">
                        <p>
                            <span idTranslate="17">
                                Tiempo
                            </span>:
                            <span>
                                ${ 
                                    element.time.years === 0 ? '' : 
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
                            </span>
                        </p>
                    </div>
                    <br>
                    <div class="study-item-description">
                        <p>
                            <span idTranslate="${element.description[1]}">
                                ${element.description[0]}
                            </span>
                        </p>
                    </div>
                    <br>
                    <h4>
                        <span idTranslate="24">
                            Herramientas de Programacion utilizados
                        </span>
                    </h4>
                    <div class="study-item-programming-tools">
                        ${ programingToolsHTMLText }
                    </div>
                </div>
        </div> `;
    });

    studiesContainer.innerHTML = studiesHTMLText ;

}