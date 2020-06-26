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

var downloadPDF = document.querySelector('#DownloadPDF');
var downloadPDFPhone = document.querySelector('#DownloadPDFPhone');
var downloadWord = document.querySelector('#DownloadPDF');


downloadPDF.addEventListener(
    "click",
    () => {
        downloadFile();
    }
);
downloadPDFPhone.addEventListener(
    "click",
    () => {
        downloadFile();
    }
);


function downloadFile(){
    generatePDF(
        data.objs.person,
        data.objs.work_experience,
        data.objs.studies,
        data.objs.idioms,
        data.objs.knowledges,
        data.objs.my_better_skills
    );
}

