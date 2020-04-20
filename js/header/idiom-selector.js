//idiom selector
let idiomSelectorContainer = document.querySelector('.idiom-selector-container');

let idiomOptionSelection = document.querySelector('.idiom-option-selection');
let idiomSelectedItem = document.querySelector('.idiom-selected-item');
//idiom options
let idiomOptionsContainer = document.querySelector('.idiom-options');
let idiomOptions = document.querySelectorAll('.idiom-option');


//evento para abrir opciones del combobox
idiomOptionSelection.addEventListener(
    "click",
    () => {
        
        /* openAndCloseIdiomSelect(
            idiomOptionSelection,
            idiomOptionsContainer
        ); */
    }
);



idiomSelectorContainer.addEventListener(
    'mouseover',
    ()=>{
        idiomSelectorContainer.style.height = "auto";
    }
);
idiomSelectorContainer.addEventListener(
    'mouseout',
    ()=>{
        idiomSelectorContainer.style.height = "91px";
    }
);

idiomSelectorContainer.addEventListener(
    'click',
    ()=>{
        
        idiomOptionSelection.classList.toggle('idiom-selected-item-open');

        if(idiomSelectedItem.getAttribute('open')==="false"){
            idiomSelectorContainer.style.height = "auto";
            idiomSelectedItem.setAttribute('open','true');
        }else{
            idiomSelectorContainer.style.height = "91px";
            idiomSelectedItem.setAttribute('open','false');
        }
        

    }
);

//evento para modificar imagen bandera y nombre del idioma 
idiomOptions.forEach(
    function(element){
        element.addEventListener(
            "click",
            () => {
                changeSelectedIdiom( 
                    element, 
                    idiomSelectedItem
                );
                closeIdiomSelect(idiomSelectorContainer);

            }
        );
    }

);

 function closeIdiomSelect(idiomSelectorContainer){
     
    idiomSelectorContainer.style.height = "91px";

 }


/* function openAndCloseIdiomSelect(
    idiomOptionSelection,  
    idiomOptionsContainer,
    event
) {


        idiomOptionsContainer.classList.toggle('idiom-options-hide');
        idiomOptionSelection.classList.toggle('idiom-selected-item-open');
    
        if(idiomOptionSelection.getAttribute('open')==="true"){
            idiomOptionSelection.setAttribute('open', 'false');
        }else{
            idiomOptionSelection.setAttribute('open', 'true');
        }
    
} */




function changeSelectedIdiom(
    element, 
    idiomSelectedItem
){

    //selected idiom flag
    var selectedFlagImage = document.querySelector('#selectedIdiomFlag');
    var selectedIdiomText = document.querySelector('#selectedItemText');

    //change flag and text content for the selected item in combobox
    switch(element.getAttribute('value')){
        case 'spanish':
            selectedFlagImage.src = "img/flags/spain-flag.jpg";
            selectedIdiomText.textContent = 'Spanish';
        break;
        case 'english':
            selectedFlagImage.src= "img/flags/united-kingdom-flag.jpg";
            selectedIdiomText.textContent = 'English';
        break;
        case 'german':
            selectedFlagImage.src = "img/flags/deutschland-flag.png";
            selectedIdiomText.textContent = 'German';
        break;
        default: 
            selectedFlagImage.src = "img/flags/spain-flag.jpg";
            selectedIdiomText.textContent = 'Spanish';
            
    }

    idiomSelectedItem.setAttribute( 'value', element.getAttribute('value') );
    
}