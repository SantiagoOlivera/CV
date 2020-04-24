//idiom selector

let idiomSelected = document.querySelector('#idiomSelected');
let idiomSelector = document.querySelector('#idiomSelector');
let idiomSelectorClose = document.querySelector('#closeIdiomSelector');
let idiomItem = document.querySelectorAll('.idiom-item');

idiomSelected.addEventListener(
    "click",
    ()=>{
        idiomSelector.style.display = "block";
    }
);
idiomSelectorClose.addEventListener(
    "click",
    ()=>{
        idiomSelector.style.display = "none";
    }
);

idiomItem.forEach(
    function(element) {
        element.addEventListener(
            "click",
            ()=>{
                //change idiom flag and text 
                changeIdiom(element);
                //close idiom  selector 
                idiomSelector.style.display = "none";
            }
        );
    }
);

function changeIdiom(element){

    var flag = document.querySelector('#idiomSelected .idiom-flag img');
    var text = document.querySelector('#idiomSelected .idiom-text');

    //console.log(element);
    //console.log(element.children[0].children[0].src);
    //console.log(element.children[1].innerText);
    idiomSelected.setAttribute('idiom', element.getAttribute('idiom'));
    flag.src = element.children[0].children[0].src;
    text.textContent = element.children[1].innerText;          

}

