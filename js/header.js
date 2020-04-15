function loadButtonFunctions(){
    
    changeIdiom();

    
    
    
}

/* function getAge( age ){
    if(age.){

    }
} */

function changeIdiom(){

    var idiomSelector = document.querySelector('#openIdiomSelector');
    var idiomSelectedItem = document.querySelector('.idiom-selected-item');
    var idiomOptionSelection = document.querySelector('.idiom-option-selection');
    var idiomOptionsContainer = document.querySelector('.idiom-options');
    var idiomOptions = document.querySelectorAll('.idiom-option')

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
                "clcik",
                () => {
                    idiomSelectedItem.value = element.value;
                    idiomSelectedItem.textContent = element.textContent;       
                }
            )

        }
    );

}