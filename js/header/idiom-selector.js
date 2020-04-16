function idiomSelector(){
   
    //idiom selector
    let idiomSelectorButton = document.querySelector('.idiom-selector-button');
    let idiomOptionSelection = document.querySelector('.idiom-option-selection');
    let idiomSelectedItem = document.querySelector('.idiom-selected-item');
    //idiom options
    let idiomOptionsContainer = document.querySelector('.idiom-options');
    let idiomOptions = document.querySelectorAll('.idiom-option');
    
    
    idiomSelectorButton.addEventListener(
        "click",
        () => {
            openIdiomSelect(
                idiomSelectorButton,
                idiomOptionSelection,
                idiomOptionsContainer
            );
        }
    );
    
    idiomOptions.forEach(
        function(element){
            element.addEventListener(
                "click",
                () => {
                    changeSelectedIdiom( 
                        element, idiomSelectedItem
                    ); 
                }
            );
        }

    );


}


function openIdiomSelect(
    idiomSelectorButton,
    idiomOptionSelection,  
    idiomOptionsContainer
) {
    
    idiomOptionsContainer.classList.toggle('idiom-options-hide');
    idiomOptionSelection.classList.toggle('idiom-selected-item-open');

    if(idiomSelectorButton.getAttribute('value')==="true"){
        idiomSelectorButton.setAttribute('value', 'false');
    }else{
        idiomSelectorButton.setAttribute('value', 'true');
    }
}

function changeSelectedIdiom(element, idiomSelectedItem){

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