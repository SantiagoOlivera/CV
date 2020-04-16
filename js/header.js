function loadButtonFunctions(){
    
    changeIdiom();

    
    
    
}

/* function getAge( age ){
    if(age.){

    }
} */

function changeIdiom(){
   
   
    
    var idiomSelector = document.querySelector('#openIdiomSelector');
    var idiomSelectedItem = document.querySelector('#selectedItemText');
    var idiomOptionSelection = document.querySelector('.idiom-option-selection');
    var idiomOptionsContainer = document.querySelector('.idiom-options');
    var idiomOptions = document.querySelectorAll('.idiom-option');
    

    

    idiomSelector.addEventListener(
        "click",
        () => {
            if(idiomSelector.value==="true"){
                idiomOptionsContainer.classList.add('idiom-options-hide');
                idiomOptionSelection.classList.add('idiom-selected-item-open');
                idiomSelector.value = "false";
            }else{
                idiomOptionsContainer.classList.remove('idiom-options-hide');
                idiomOptionSelection.classList.remove('idiom-selected-item-open');
                idiomSelector.value = "true";
            }
        }
    );
    
    

    idiomOptions.forEach(
        function(element){
            element.addEventListener(
                "click",
                () => {

                    var value = element.getAttribute('value');
                    var image = document.getElementById('selectedIdiomFlag');
                    
                    idiomSelectedItem.value = value;
                    idiomSelectedItem.textContent = element.textContent; 


                   

                    switch(value){
                        case 'spanish':
                            image.src = "img/flags/spain-flag.jpg";
                            
                        break;
                        case 'english':
                           
                            image.src= "img/flags/united-kingdom-flag.jpg";
                        break;
                        case 'german':
                            image.src = "img/flags/deutschland-flag.png";
                        break;
                        default: 
                        image.src = "img/flags/spain-flag.jpg";
                    }
                }
            );

            

        }
    );

}

