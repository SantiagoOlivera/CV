let downloadSelector = document.querySelector('#downloadSelector');
let downloadSelectorButton = document.querySelector('#downloadSelectorButton');

downloadSelectorButton.addEventListener(
    "click",
    () => {
        
        if(window.innerWidth < 700 ){
            downloadSelector.classList.toggle('show');
        }
    }
);