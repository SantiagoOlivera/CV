function setPersonalDataHTMLText(person){
    //object person
    
    personalDataHTMLText = '';
    
    var personalDataFullScreen = document.querySelector('#personalDataFullScreen');
    var personalDataPhone = document.querySelector('#personalDataPhone');
    var name = document.querySelector('#name');
    document.querySelector('#personalDataImage').setAttribute('src', person.img);
    //fue un bello intento
    //document.querySelector('meta[name="profile-photo"]').setAttribute('content',person.img);
    //document.querySelector('meta[name="name"]').setAttribute('content',`${person.name} ${person.secondName} ${person.lastname}`);

    personalDataHTMLText = `
        <ul class="profile-information-list">
            <li>
                <span idTranslate="1" >
                    Fecha de nacimiento
                </span>
                :
                ${person.birthdate.getDate()}
                <span idTranslate="${new GenericFunction().getMonthName(person.birthdate.getMonth()+1).idTranslate}">
                    ${ new GenericFunction().getMonthName(person.birthdate.getMonth()+1).name}
                </span>
                ${person.birthdate.getFullYear() }
            </li>
            <li>
                <span idTranslate="2">
                    Edad 
                </span>
                :
                <span></span>
                <span id="age">
                    ${person.getAge()}
                </span>
                <span idTranslate="3"> años</span>
            </li>
            <li>
                Email: 
                <a href="mailto:${person.email}">
                    ${person.email}
                </a>
            </li>
            <li>
                <span idTranslate="4">
                    Nacionalidad
                </span>
                :
                <span  idTranslate="5">
                   ${person.nationality}
                </span>
            </li>
        </ul>
    `;
   
    personalDataFullScreen.innerHTML = personalDataHTMLText;
    personalDataPhone.innerHTML = personalDataHTMLText;
    name.textContent =  `${person.name} ${person.secondName} ${person.lastname}`;
    
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
