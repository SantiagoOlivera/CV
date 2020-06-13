function getPersonalData(person){
    //object person
    var age = person.getAge();
    //console.log(age);
    document.querySelector('#age').textContent =  age;
    document.querySelector('#name').textContent = `${person.name} ${person.lastname}` ;
}


var personalDataWindow = document.querySelector('#personalData');
var personalDataButton = document.querySelector('#personalDataImage');

console.log(personalDataWindow);
console.log(personalDataButton);

personalDataButton.addEventListener(
    'click', () => {
        console.log("asd");
        //openPersonalDataWindow();
    }
);

function openPersonalDataWindow(){
    personalDataWindow.classList.add('show');
}
