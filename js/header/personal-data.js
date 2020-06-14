function getPersonalData(person){
    //object person
    var age = person.getAge();
    //console.log(age);
    document.querySelector('#age').textContent =  age;
    document.querySelector('#ageWindow').textContent =  age;
    document.querySelector('#name').textContent = `${person.name} ${person.secondName} ${person.lastname}` ;
}


var personalDataWindow = document.querySelector('#personalData');
var personalDataButton = document.querySelector('#personalDataImage');
var closePersonalDataButton = document.querySelector('#closePersonalData');

/* console.log(personalDataWindow);
console.log(personalDataButton); */

personalDataButton.addEventListener(
    'click', () => {
        if(window.innerWidth<700){
            openAndClosePersonalDataWindow();
        }
    }
);
closePersonalDataButton.addEventListener(
    'click', () => {
        openAndClosePersonalDataWindow();
    }
);

function openAndClosePersonalDataWindow(){
    personalDataWindow.classList.toggle('show');
}
