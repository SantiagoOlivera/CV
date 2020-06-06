function translate(idiom){
    
    //console.log("translate");
    //get all span tag with the idTranslate
    translationsItems = document.querySelectorAll('span[idTranslate]');
    
    
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

    //translate objects
    
}

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
    //año
    15:{
        'ESP':'año',
        'ENG':'year',
        'GER':'Jahr'
    },
    //años
    16:{
        'ESP':'años',
        'ENG':'years',
        'GER':'Jahr'
    },
    //Tiempo
    17:{
        'ESP':'Tiempo',
        'ENG':'Time',
        'GER':'Zeit'
    },
    //Inicio
    18:{
        'ESP':'Inicio',
        'ENG':'Start Date',
        'GER':'Anfangsdatum'
    },
    //Fin
    19:{
        'ESP':'Fin',
        'ENG':'End Date',
        'GER':'Endtermin'
    },
    //mes
    20:{
        'ESP':'mes',
        'ENG':'month',
        'GER':'Monat'
    },
    //meses
    21:{
        'ESP':'meses',
        'ENG':'months',
        'GER':'Monate'
    },
    //día
    22:{
        'ESP':'día',
        'ENG':'day',
        'GER':'Tag'
    },
    //días
    23:{
        'ESP':'días',
        'ENG':'days',
        'GER':'Tage'
    },

    //Enero
    101: {
        'ESP':'Enero',
        'ENG':'Jenuary',
        'GER':'Januar'
    },
    //Febrero
    102: {
        'ESP':'Febrero',
        'ENG':'Febrery',
        'GER':'Februar'
    },
    //Marzo
    103: {
        'ESP':'Marzo',
        'ENG':'March',
        'GER':'März'
    },
    //Abril
    104: {
        'ESP':'Abril',
        'ENG':'April',
        'GER':'April'
    },
    //Mayo
    105: {
        'ESP':'Mayo',
        'ENG':'May',
        'GER':'Mai'
    },
    //Junio
    106: {
        'ESP':'Junio',
        'ENG':'June',
        'GER':'Juni'
    },
    //Julio
    107: {
        'ESP':'Julio',
        'ENG':'July',
        'GER':'Juli'
    },
    
    108: {
        'ESP':'Agosto',
        'ENG':'August',
        'GER':'August'
    },
    109: {
        'ESP':'Septiembre',
        'ENG':'September',
        'GER':'September'
    },
    110: {
        'ESP':'Octubre',
        'ENG':'October',
        'GER':'Oktober'
    },
    111: {
        'ESP':'Noviembre',
        'ENG':'November',
        'GER':'November'
    },
    112: {
        'ESP':'Diciembre',
        'ENG':'December',
        'GER':'Dezember'
    },

};