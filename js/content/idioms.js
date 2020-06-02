//var porcentageCircles = document.querySelectorAll('.procentage-circle');
var idiomsContainer = document.querySelector('.idioms-container');

//console.log(procentageCircles);

/* porcentageCircles.forEach(
    element => {
        element.children[1].style.strokeDashoffset = "440px";
    }
); */

//color circles
var porcentageCircleColor = '#FFCC00';
var idiomsHTMLText = '';

function setIdiomsItemsHTMLText(idioms){
    
    idioms.forEach(
        
        element => {
            
            idiomsHTMLText = ` ${ idiomsHTMLText } 

                <div class="idiom-card">

                    <div class="idiom-container-card">

                            <div class="idiom-item-container ${ element.level < 100 ? '.idiom-porcentage-left' : '' }">

                                <div class="idiom-title">
                                    <h1><span>${element.title}</span></h1>
                                </div>

                                <div class="idiom-porcentage">
                                    <h1>${element.level}%</h1>
                                </div>

                                <div class="idiom-circle">
                                    <svg class="procentage-circle">
                                        <circle  cx="70" cy="70" r="70" stroke="${porcentageCircleColor}"></circle>
                                        <circle  cx="70" cy="70" r="70" ></circle>
                                        <circle  cx="70" cy="70" r="70" ></circle>
                                    </svg>
                                </div>

                            </div>

                    </div>

                </div>
            
            `;



        }
    );

    idiomsContainer.innerHTML =  idiomsHTMLText;

}

