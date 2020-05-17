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

        studiesHTMLText = ` ${studiesHTMLText}

            <div class="study-item">                            
                <div class="study-item-name">
                    <h1><span>${element.title}</span></h1>
                </div>
                <div class="study-item-type">
                    <p><span>Tipo:</span><span>${element.type}</span></p>
                </div>
                <div class="study-item-state">
                    <p><span>Estado:</span><span>${element.state}</span></p>
                </div>
                <div class="study-item-start">
                    <p>
                        <span>Inicio:</span>
                        <span>
                            ${ GenericFunctions.getMonthName( element.startDate.getMonth() + 1 , idiom ) }
                            ${ element.startDate.getFullYear() }
                        </span>
                    </p>
                </div>
                <div class="study-item-end">
                    <p>
                        <span>Fin:</span>
                        <span>
                            ${ GenericFunctions.getMonthName( element.endDate.getMonth() + 1 , idiom ) }
                            ${ element.endDate.getFullYear() }
                        </span>
                    </p>
                </div>
                <div class="study-item-end">
    
                </div>
                <div class="study-item-description">
                    <p>
                        <span>
                            ${element.description}
                        </span>
                    </p>
                </div>
                <div class="study-item-programming-tools">
                    <h4><span>Herramientas de Programacion utilizadas</span></h4>
                    <div class="programming-tools-title">
                        
                    </div>
                </div>
        </div> `;
    });

    studiesContainer.innerHTML = studiesHTMLText ;

}