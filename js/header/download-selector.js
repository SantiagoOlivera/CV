let downloadSelector = document.querySelector('#downloadSelector');
let downloadSelectorButton = document.querySelector('#downloadSelectorButton');
let downloadCloseButton = document.querySelector('#downloadCloseButton');

downloadSelectorButton.addEventListener(
    "click",
    () => {
        if(window.innerWidth < 700 ){
            
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