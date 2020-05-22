//Observable timeline width
let fullContent = document.querySelector('.full-content');
let line = document.querySelector('.line');
let leftSideItems = document.querySelectorAll('.timeline-item');


const resizeObserver = new ResizeObserver(entries => {
    // iterate over the entries, do something.
    //console.log("cambio de tamaño:");
    //console.log(fullContent.clientWidth);
    //console.log(leftSideItems);
    if(fullContent.clientWidth<=800){

        line.classList.add('line-in-left-side');

        leftSideItems.forEach(
            function(element){
                element.classList.add('timeline-item-left');
            }
        ); 

    }else{

        line.classList.remove('line-in-left-side');
    
        leftSideItems.forEach(
            function(element){
                element.classList.remove('timeline-item-left');
            }
        ); 

    }
});

resizeObserver.observe(fullContent);