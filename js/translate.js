const translations = {
    // Fecha de Nacimiento
    1: {
        'ESP':'Fecha de Nacimiento',
        'ENG':'Birth Date',
        'GER':'Geburtsdatum'
    },
    // Edad
    2:{
        'ESP':'Edad',
        'ENG':'Age',
        'GER':'Alter'
    },
    // años
    3:{
        'ESP':' años',
        'ENG':' years',
        'GER':' Jahre'
    },
    // Nacionalidad
    4:{
        'ESP':'Nacionalidad',
        'ENG':'Nationality',
        'GER':'Nationalität'
    },
    5:{
        'ESP':'Argentina',
        'ENG':'Argentina',
        'GER':'Argentinien'
    },
    //6 Download
    6:{
        'ESP':'Descarga',
        'ENG':'Download',
        'GER':'Herunterladen'
    },
    //7 Spanish
    7:{
        'ESP':'Español',
        'ENG':'Spanish',
        'GER':'Spanisch'
    },
    //8 English
    8:{
        'ESP':'Inglés',
        'ENG':'English',
        'GER':'Englisch'
    },
    //9 Alemán
    9:{
        'ESP':'Alemán',
        'ENG':'German',
        'GER':'Deutsch'
    },
    //Work Experience
    10:{
        'ESP':'Experiencia Laboral',
        'ENG':'Work Experience',
        'GER':'Arbeitserfahrung'
    },
    //Studies
    11:{
        'ESP':'Estudios',
        'ENG':'Studies',
        'GER':'Studien'
    },
    //Knowledges
    12:{
        'ESP':'Conocimientos',
        'ENG':'Knowledges',
        'GER':'Wissen'
    },
    //Idioms
    13:{
        'ESP':'Idiomas',
        'ENG':'Idioms',
        'GER':'Redewendung'
    },
    //My Better Skills
    14:{
        'ESP':'Mis Mejores Habilidades',
        'ENG':'My Better Skills',
        'GER':'Meine besseren Fähigkeiten'
    },
    //
    //
    //
};

function translate(idiom){
    
    console.log("translate");
    translationsItems = document.querySelectorAll('span[idTranslate]');
    //console.log(translationsItems);
    
    
            
    translationsItems.forEach(element => {
            
            var idTranlation = element.getAttribute('idTranslate');
            
            if(translations[idTranlation]){
                //if the translation exist in JSON translate the text

                switch(idiom){
                    case 0:
                        //console.log(translations[idTranlation].ESP);
                        element.innerHTML = translations[idTranlation].ESP;
                        break;
                    case 1:
                        //console.log(translations[idTranlation].ENG);
                        element.innerHTML = translations[idTranlation].ENG;
                        break;
                    case 2:
                        //console.log(translations[idTranlation].GER);
                        element.innerHTML = translations[idTranlation].GER;
                        break;
                    default:
                        //console.log(translations[idTranlation].ESP);
                        element.innerHTML = translations[idTranlation].ESP;

                }

            }

    });
        
}