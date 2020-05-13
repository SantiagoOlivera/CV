let downloadSelector = document.querySelector('#downloadSelector');
let downloadSelectorButton = document.querySelector('#downloadSelectorButton');
let downloadCloseButton = document.querySelector('#downloadCloseButton');
let downloadItems = document.querySelectorAll('.download-item');

downloadSelectorButton.addEventListener(
    "click",
    () => {
        if(window.innerWidth < 850 ){
            
            downloadSelector.classList.add('show');
            
        }
    }
);
downloadCloseButton.addEventListener(
    "click",
    () => {
         downloadSelector.classList.remove('show');
    }
);

downloadItems.forEach(
    function(element){
        element.addEventListener(
            "click",
            () => {
                downloadSelector.classList.remove('show');
            }
        );
    }
);