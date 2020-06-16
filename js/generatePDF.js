


function generatePDF(
        person,
        work_experience,
        studies,
        idioms,
        knowledges,
        my_better_skillsidiom
    ){

    var base64 = getBase64Image(document.getElementById("personalDataImage"));
    //var image =  new FileReader(person.image);
    var pdf = new jsPDF();
            

    
    
    
    //hoja 1
    pdf.addImage(
        //base64 file
        base64, 
        //tipo de imagen
        'JPEG',
        //distance of left
        20, 
        //distance of top
        20,
        //width
        45, 
        //height
        45
    );

    
    //`${}`
    
    //------------------------------------------Personal Data-----------------------------------------
        pdf.text(75,25, `${person.name} ${person.secondName} ${person.lastname} `);
        pdf.text(75,25, `${person.name} ${person.secondName} ${person.lastname} `);    

        pdf.setFontSize(10);
        //Birthdate
        pdf.text(75,30, `${getWordTranslatedToPDF(1)}: ${person.birthdate.getDate()} ${ getWordTranslatedToPDF(new GenericFunction().getMonthName(person.birthdate.getMonth()+1).idTranslate)} ${person.birthdate.getFullYear()}`);
        //Age
        pdf.text(75,35, `${getWordTranslatedToPDF(2)}: ${person.getAge()} ${getWordTranslatedToPDF(3)}`);
        //Email
        pdf.text(75,40, `Email: ${person.email}`);
        //Nationality
        pdf.text(75,45, `${getWordTranslatedToPDF(4)}: ${ getWordTranslatedToPDF(person.nationality[1])}`);
        
    //------------------------------------------Fin Personal Data-----------------------------------------
    

    //-------------------------------------------Work Experience-------------------------------------------
        pdf.setFontSize(20);
        pdf.text(20,75, `${getWordTranslatedToPDF(10)}`);
        

        pdf.setFontSize(15);

        var cont1 = 0;
        //Espacios entre Items
        var SPACE1 = 0;
        var SPACE2 = 0;

        work_experience.forEach(
            element => {

                pdf.setFontSize(15);
                
                //HEIGHT SPACES BETWEEN TEXT
                SPACE1 = 85 + (cont1*30);
                SPACE2 = 5  + SPACE1;

                pdf.text(
                    20,
                    SPACE1,
                    `${element.year}`
                );
                pdf.setFontSize(10);
                pdf.text(
                    20,
                    SPACE2,
                    `${element.title[0]}`
                );

                cont1++;
            }
        ); 



    //-------------------------------------------Fin Work Experience-------------------------------------------
    pdf.addPage();
    pdf.text(20,20,'TEST PAGE 2!');

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
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
  
  