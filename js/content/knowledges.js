var knowledgeContainer = document.querySelector('.knowledge-container');


var knowledgePorcentageCircle ="#FFCC00";

function setKnowledgesItemsHTMLText(knowledges){

     var knowledgesHTMLText = '';
     var cont = 0;
     
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

                    <div class="porcentage-line" >
                        <div class="porcentage-loading-number">
                            ${element.level}%
                        </div>
                        <div class="porcentage-line-loading">
                        </div>
                    </div>
                `;

            }
           
        );
        

        knowledgesHTMLText = ` ${ knowledgesHTMLText } 

            <div class="knowledge-item" index="${cont}">

                <div class="knowledge-item-container">
                    
                    <div class="knowledge-item-title">
                        <h1>
                            <span>${element.title}</span>
                        </h1>
                    </div>

                    <div class="knowledge-item-level">
                        <div class="knowledge-porcentage">
                            <p>${Math.round(element.level)}%</p>
                        </div>

                        <svg class="knowledge-porcentage-circle" width="80px" height="80px">
                            <circle  cx="30" cy="30" r="30" stroke="${knowledgePorcentageCircle}"></circle>
                            <circle  cx="30" cy="30" r="30"></circle>
                            <circle  cx="30" cy="30" r="30"></circle>
                        </svg>
                    </div>
                    <div class="knowledge-programming-tools">
                        ${programmingToolsHTMLText}
                    </div>

                </div>
            
        </div>

    `;

    cont++;
        
    });

    knowledgeContainer.innerHTML = knowledgesHTMLText;

}