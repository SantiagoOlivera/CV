function generatePDF(
        person,
        work_experience,
        studies,
        idioms,
        knowledges,
        my_better_skillsidiom
){
    
    var pdf = new PDF("Santiago Ariel Olivera CV","CV");
    pdf.setFont("RobotoCondensed-Regular");
    pdf.generateFile(data.objs);

}



function grayScaleImage(ctx){
    ctx.filter = "grayscale(90%)";

    return ctx;

}

function roundedBordersImage(ctx,img){
    
    ctx.drawImage(img, 0, 0);
    ctx.save();
    ctx.globalCompositeOperation="destination-out";
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(10,0);
    ctx.arcTo(0,0,0,100,100);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(200,0);
    ctx.lineTo(190,0);
    ctx.arcTo(200,0,200,100,100);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0,200);
    ctx.lineTo(0,190);
    ctx.arcTo(0,200,100,200,100);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(200,200);
    ctx.lineTo(190,200);
    ctx.arcTo(200,200,200,100,100);
    ctx.closePath();
    ctx.fill();
    ctx.restore();


    return ctx;
}


function drawWorkExperiencesSection(
    pdf,
    work_experience
){
    //Title
    pdf.setFontSize(20);
    pdf.text(20,75, `${getWordTranslatedToPDF(10)}`);

    //
    _paperWidth = 220;
    _paperHeight = 297;
    _squareWidth = 80;
    _squareHeight = 90;
    _squareMarginLeft = 20;
    _squareMarginTop = 80
    

    work_experience.forEach(
        element => {
            
            //draw Rect
            pdf.setLineWidth(2);
            pdf.setDrawColor(255, 204, 0);
            //pdf.setFillColor(255, 204, 0);
            pdf.rect(
                _squareMarginLeft, //positionX
                _squareMarginTop, //positionY
                _squareWidth,    //rectWidth
                _squareHeight,  //rectHeight
            ); 

            
            
            //draw work experience items
            drawWorkExperienceItem(
                pdf,
                element,
                _squareMarginLeft,
                _squareMarginTop,
                _squareWidth
            );
            

            if(_squareMarginLeft + _squareWidth*2 > _paperWidth){
                _squareMarginLeft = 20;
                _squareMarginTop  += _squareHeight + 10;
                if((_squareMarginTop + _squareHeight) > _paperHeight){
                    pdf.addPage();
                    _squareMarginTop = 20;
                    _squareMarginLeft = 20;
                }
            }else{
                _squareMarginLeft += _squareWidth + 10;                
            }
            

            



        }
    );

}


function drawWorkExperienceItem(
    pdf,
    element,
    _squareMarginLeft,
    _squareMarginTop,
    _squareWidth
){
    pdf.setFontSize(20);
    //year
    pdf.text(
        _squareMarginLeft + 3,
        _squareMarginTop + 7,
        `${element.year}`
    );
    //change fontsize
    pdf.setFontSize(15);
    //title
    pdf.text(
        _squareMarginLeft + 3,
        _squareMarginTop + 15,
        `${element.title[0]}`
    );
    pdf.setFontSize(10);
    //Start
    pdf.text(
        _squareMarginLeft + 3,
        _squareMarginTop + 20,
        `${getWordTranslatedToPDF(18)}: ${getWordTranslatedToPDF(new GenericFunction().getMonthName((element.startDate.getMonth()+1)).idTranslate)} ${element.startDate.getFullYear()}`
    );
    //End
    pdf.text(
        _squareMarginLeft + 3,
        _squareMarginTop + 25,
        `${getWordTranslatedToPDF(19)}: ${getWordTranslatedToPDF(new GenericFunction().getMonthName((element.endDate.getMonth()+1)).idTranslate)} ${element.endDate.getFullYear()}`
    );
    //time
    pdf.text(
        _squareMarginLeft + 3,
        _squareMarginTop + 30,
        `${getWordTranslatedToPDF(17)}: ${element.time.years===0 ? '' : element.time.years} ${element.time.years===0 ? '' : element.time.years===1 ? getWordTranslatedToPDF(15) : getWordTranslatedToPDF(16)} ${element.time.months===0 ? '' : element.time.months} ${element.time.months===0 ? '' : element.time.months===1 ? getWordTranslatedToPDF(20) : getWordTranslatedToPDF(21)} ${element.time.days===0 ? '' : element.time.days} ${element.time.days===0 ? '' : element.time.days===1 ? getWordTranslatedToPDF(22) : getWordTranslatedToPDF(23)}`
    );
    //tasks
    pdf.setFontSize(13);
    pdf.text(
        _squareMarginLeft + 3,
        _squareMarginTop + 37,
        `${getWordTranslatedToPDF(30)}`
    );
    //description
    pdf.setFontSize(10);
    pdf.text(
        _squareMarginLeft + 3,
        _squareMarginTop + 42,
        pdf.splitTextToSize(element.description[0], _squareWidth-3)
    );
    //Programming Tools Used
    //console.log( pdf.getTextDimensions(pdf.splitTextToSize(element.description[0], 180)) );
    //console.log(SPACE8);
    pdf.setFontSize(13);
    var _descriptionHeight = pdf.getTextDimensions(pdf.splitTextToSize(element.description[0], 180)).h;
    pdf.text(
        _squareMarginLeft + 3,
        _squareMarginTop + 48 + _descriptionHeight,
        `${getWordTranslatedToPDF(24) }`
    );

    pdf.setFontSize(10);
    var cont = 5;
    element.programingTools.forEach(
        element => {
            pdf.text(
                _squareMarginLeft + 3,
                _squareMarginTop + 48 + _descriptionHeight + cont, 
                `- ${element.title}`  
            );
            cont+=5;
        }
    );

}