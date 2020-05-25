var knowledgeContainer = document.querySelector('.knowledge-container');

function setKnowledgesItemsHTMLText(knowledges){

     var knowledgesHTMLText = '';
     
    knowledges.forEach(element => {

        //console.log(element);
        
        var programmingToolsHTMLText = '';

        
        element.programingTools.forEach(

            element => {

                programmingToolsHTMLText = ` 
                    
                    ${ programmingToolsHTMLText }
                    
                    <div class="porcentage-title">
                        ${element.title}
                    </div>

                    <div class="porcentage-line">
                        <div class="porcentage-loading-number">
                            ${element.level}%
                        </div>
                        <div class="porcentage-line-loading" style=" width:${element.level}% ">
                        </div>
                    </div>
                `;
            }
        );
        

        knowledgesHTMLText = ` ${ knowledgesHTMLText } 

            <div class="knowledge-item">

            <div class="knowledge-item-container">
                
                <div class="knowledge-item-title">
                    <h1>
                        <span>${element.title}</span>
                    </h1>
                </div>

                <div class="knowledge-item-level">
                    ${element.level}
                </div>
                <div class="knowledge-programming-tools">
                    ${programmingToolsHTMLText}
                </div>

            </div>
            
        </div>

    `;
        
    });

    knowledgeContainer.innerHTML = knowledgesHTMLText;

}