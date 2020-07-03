function generatePDF(
        person,
        work_experience,
        studies,
        idioms,
        knowledges,
        my_better_skillsidiom
){
    
    var pdf = new jsPDF();
    //show fonts loaded
    //console.log(pdf.getFontList());
    //set Font
    pdf.setFont('RobotoCondensed-Regular');
    
    
    //`${}`
    
    //Personal Data
        drawPersonalDateRect(
            pdf,
            person,
            getBase64Image(document.querySelector("#personalDataImage"))
        );
        
    //------------------------------------------Fin Personal Data-----------------------------------------
    

    //-------------------------------------------Work Experience-------------------------------------------
     
    
    
       pdf.setFontSize(20);

        //Experiencia Laboral
        var TAMANIO_CUADRO = pdf.getTextDimensions(
            `${getWordTranslatedToPDF(10)}`
        );
        pdf.text(20,75, `${getWordTranslatedToPDF(10)}`);

        pdf.setFontSize(15);

        var cont1 = 0;
        //Espacios entre Items
        var POSICION_INICIAL = 85;
        var SPACE1 = 0;
        var SPACE2 = 0;
        var SPACE3 = 0;
        var SPACE4 = 0;
        var SPACE5 = 0;
        var SPACE6 = 0;
        var SPACE7 = 0;
        var SPACE8 = 0;
        var SPACE9 = 0;
        
        var ESPACIO_TOTAL = 100; 

        work_experience.forEach(
            element => {

                pdf.setFontSize(15);

                if(cont1*120>220){
                    pdf.addPage();
                    POSICION_INICIAL = 20;
                    cont1 = 0; 
                }

                /*

                    console.log(SPACE1);
                    console.log(SPACE2);
                    console.log(SPACE3);
                    console.log(SPACE4);
                    console.log(SPACE5);
                    console.log(SPACE6);
                    console.log(SPACE7);
                    console.log(SPACE8);
                    console.log(SPACE9); 
                
                */
                

                //HEIGHT SPACES BETWEEN TEXT
                SPACE1 = POSICION_INICIAL + (cont1*120);
                SPACE2 = 5  + SPACE1;
                SPACE3 = 5  + SPACE2;
                SPACE4 = 5  + SPACE3;
                SPACE5 = 5  + SPACE4;
                SPACE6 = 7  + SPACE5;
                SPACE7 = 5  + SPACE6;

                var ESPACIO_DESCRIPTION = (pdf.getTextDimensions(pdf.splitTextToSize(element.description[0], 180)).h);
                console.log(ESPACIO_DESCRIPTION);
                SPACE8 = ( ESPACIO_DESCRIPTION + SPACE7 ) // - (15 - (pdf.getTextDimensions(pdf.splitTextToSize(element.description[0], 180)).h));
                SPACE9 = 5  + SPACE8;

                //year
                pdf.text(
                    20,
                    SPACE1,
                    `${element.year}`
                );

                //change fontsize
                pdf.setFontSize(10);
                
                //title
                pdf.text(
                    20,
                    SPACE2,
                    `${element.title[0]}`
                );
                //Start
                pdf.text(
                    20,
                    SPACE3,
                    `${getWordTranslatedToPDF(18)}: ${getWordTranslatedToPDF(new GenericFunction().getMonthName((element.startDate.getMonth()+1)).idTranslate)} ${element.startDate.getFullYear()}`
                );
                //End
                pdf.text(
                    20,
                    SPACE4,
                    `${getWordTranslatedToPDF(19)}: ${getWordTranslatedToPDF(new GenericFunction().getMonthName((element.endDate.getMonth()+1)).idTranslate)} ${element.endDate.getFullYear()}`
                );
                //time
                pdf.text(
                    20,
                    SPACE5,
                    `${getWordTranslatedToPDF(17)}: ${element.time.years===0 ? '' : element.time.years} ${element.time.years===0 ? '' : element.time.years===1 ? getWordTranslatedToPDF(15) : getWordTranslatedToPDF(16)} ${element.time.months===0 ? '' : element.time.months} ${element.time.months===0 ? '' : element.time.months===1 ? getWordTranslatedToPDF(20) : getWordTranslatedToPDF(21)} ${element.time.days===0 ? '' : element.time.days} ${element.time.days===0 ? '' : element.time.days===1 ? getWordTranslatedToPDF(22) : getWordTranslatedToPDF(23)}`
                );
                //tasks
                pdf.setFontSize(15);
                pdf.text(
                    20,
                    SPACE6,
                    `${getWordTranslatedToPDF(30)}`
                );
                //description
                pdf.setFontSize(10);
                pdf.text(
                    20,
                    SPACE7,
                    pdf.splitTextToSize(element.description[0], 180)
                );
                //Programming Tools Used
                //console.log( pdf.getTextDimensions(pdf.splitTextToSize(element.description[0], 180)) );
                //console.log(SPACE8);
                pdf.setFontSize(15);
                pdf.text(
                    20,
                    SPACE8,
                    `${getWordTranslatedToPDF(24) }`
                );

                //programming languages
                pdf.setFontSize(10);
                element.programingTools.forEach(
                    
                    element => {

                        pdf.text(
                            20,
                            SPACE9,
                            `- ${element.title}`  
                        );

                        SPACE9 +=5; 
                    }
                );
                
                cont1++;

            }
        ); 



    //-------------------------------------------Fin Work Experience-------------------------------------------
    //pdf.addPage();
    //pdf.text(20,20,'TEST PAGE 2!');

    pdf.save("Santiago Ariel Olivera CV.pdf");


}


function getWordTranslatedToPDF(idTranslate){
    //this function brings the word indexed translated 
    //according to the idiom selected in the page
    
        switch(document.querySelector('#idiomSelected').getAttribute('idiom')){
            case 'spanish':
                return translations[idTranslate].ESP;
                break;
            case 'english':
                return translations[idTranslate].ENG;
                break;
            case 'german':
                return translations[idTranslate].GER;
                break;
            default:
                return translations[idTranslate].ESP;

        
    }
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");  
}

function drawPersonalDateRect(
    pdf,
    person,
    photo,
){
    //draw header with personal information in the cv
    //set rect color
    pdf.setFillColor(255, 204, 0);
    pdf.rect(
        0,  //positionX
        0,  //positionY
        210,  //rectWidth
        65,  //rectHeight
        'F' //F: for Fill, FD: Fill and Border
    );   
    //add Image
    pdf.addImage(
        photo, //base64 file
        'JPEG', //tipo de imagen
        10, //distance of left
        10, //distance of top
        45, //width
        45 //height
    );
    pdf.setFontSize(35);
    pdf.text(65,20, `${person.name} ${person.secondName} ${person.lastname} `);    
    pdf.setFontSize(15);
    //Birthdate
    pdf.text(65,30, `${getWordTranslatedToPDF(1)}: ${person.birthdate.getDate()} ${ getWordTranslatedToPDF(new GenericFunction().getMonthName(person.birthdate.getMonth()+1).idTranslate)} ${person.birthdate.getFullYear()}`);
    //Age
    pdf.text(65,37, `${getWordTranslatedToPDF(2)}: ${person.getAge()}${getWordTranslatedToPDF(3)}`);
    //Email
    pdf.text(65,44, `Email: ${person.email}`);
    //Nationality
    pdf.text(65,51, `${getWordTranslatedToPDF(4)}: ${ getWordTranslatedToPDF(person.nationality[1])}`);
}