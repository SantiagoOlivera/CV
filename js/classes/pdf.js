class PDF{

    

    constructor(
        filename,
        docType
    ){
        this.pdf = new jsPDF('p','mm','a4');
        this.docType = docType;
        this.filename = filename;
    }


    

    
    generateFile(data){
        switch(this.docType){
            case "CV":
                this.generateCV(data);
                this.savePDF(this.filename);
            break;
        }
    }
    


    positionItem(
        obj
    ){
        switch(obj.type){
            
            case 'square':

                this.pdf.setFillColor(
                    obj.fill.color.r,
                    obj.fill.color.g,
                    obj.fill.color.b
                );

                this.pdf.rect(
                    obj.positionX,
                    obj.positionY,
                    obj.width,
                    obj.height,
                    obj.fill.type
                );

            break;

            case 'text':
                
                this.pdf.setFontSize(obj.font_size);
                this.pdf.setTextColor(obj.color.r,obj.color.g,obj.color.b);
                this.pdf.setDrawColor(obj.color.r,obj.color.g,obj.color.b);
                var text = obj.prefix + obj.value + obj.subfix;
                var textHeight = this.pdf.getTextDimensions(text).h;
                var textWidth = this.pdf.getTextDimensions(text).w;


                switch(obj.textType){

                    case 'normal':
                        this.pdf.text(
                            obj.positionX,
                            obj.positionY,
                            text  
                        );
                        break;
                    case 'link':
                        this.pdf.textWithLink(
                            text,
                            obj.positionX,
                            obj.positionY,
                            {  url:  obj.link }
                        );
                        break;
                    case 'italic':
                        break;
                    case 'bold':
                        break;
                    case 'underline':
                        
                        this.pdf.line(
                            obj.positionX,
                            obj.positionY + 1,
                            obj.positionX + textWidth,
                            obj.positionY + 1
                        );
                        
                        this.pdf.text(
                            obj.positionX,
                            obj.positionY,
                            text  
                        );

                        break;
                    case 'email':
                        
                        this.pdf.line(
                            obj.positionX,
                            obj.positionY + 1,
                            obj.positionX + textWidth,
                            obj.positionY + 1
                        );

                        this.pdf.textWithLink(
                            text,
                            obj.positionX,
                            obj.positionY,
                            {  url: 'mailto: '+ obj.link }
                        );

                        break;

                }

            break;

            case 'image':
                
                var base64 = this.getBase64Image(
                    obj.src, 
                    obj.properties.grayscale,
                    obj.properties.rounded_borders
                );

                this.pdf.addImage(
                    base64,             //base64 file
                    obj.imageType,      //tipo de imagen
                    obj.positionX,     //distance of left
                    obj.positionY,     //distance of top
                    obj.width,         //width
                    obj.height         //height
                )
            break;

            case 'block':
                
                var block = this.createBlock(obj);

                this.pdf.addImage(
                    block,
                    'PNG',
                    obj.positionX,
                    obj.positionY,
                    obj.width,
                    obj.height,
                );

                
                    
                   

                    
            break;
            
        }

    }


    positionBlock(
        block
    ){
        switch(block.type){
            case 'single':
                break;
            case 'multiple':
                break;
        }
    }

    savePDF(filename){
        this.pdf.save(filename + '.pdf');
    }

    generateCV(data){

        //console.log(data.work_experience);

        


        var cv = {

            header: {
                type: 'square',
                positionX: 0,
                positionY: 0,
                width: 210,
                height: 65,
                fill: {
                    type: 'F',
                    color: {
                        r:255,
                        g:204,
                        b:0,
                    }
                }
            },
            photo:{
                type: 'image',
                src: document.querySelector("#personalDataImage"),
                imageType:'JPEG',
                positionX: 25,
                positionY: 10,
                width: 45,
                height: 45,
                properties:{
                    grayscale: 90,
                    rounded_borders: 50
                }
            },
            name:{
                type: 'text',
                textType: 'normal',
                positionX: 80,
                positionY: 20,
                width: 200,
                height:200,
                value: data.person.name + ' ' + data.person.secondName + ' ' + data.person.lastname ,
                font_size: 30,
                prefix: '',
                subfix: '',
                color: {
                    r:0,
                    g:0,
                    b:0,
                }
            },

            birthdate:{
                type: 'text',
                textType: 'normal',
                positionX: 80,
                positionY: 30,
                width: 200,
                height:200,
                value: getWordTranslatedById(1) + ': ' + new GenericFunction().formatDate(data.person.birthdate,1),
                font_size: 15,
                prefix: '',
                subfix: '',
                color: {
                    r:0,
                    g:0,
                    b:0,
                },
            },

            age:{
                type: 'text',
                textType: 'normal',
                positionX: 80,
                positionY: 37,
                width: 200,
                height: 200,
                value: getWordTranslatedById(2) + ': ' + data.person.getAge() + ' ' + getWordTranslatedById(3),
                font_size: 15,
                prefix: '',
                subfix: '',
                color: {
                    r:0,
                    g:0,
                    b:0,
                },
                
            },
            email:{
                type: 'text',
                textType: 'email',
                positionX: 80,
                positionY: 44,
                width: 200,
                height: 200,
                value:  data.person.email,
                font_size: 15,
                link: data.person.email,
                prefix: 'Email: ',
                subfix: '',
                color: {
                    r:0,
                    g:97,
                    b:175,
                },
                
            },
            nationality:{
                type: 'text',
                textType: 'normal',
                positionX: 80,
                positionY: 51,
                width: 200,
                height: 200,
                value:  getWordTranslatedById(data.person.nationality[1]),
                font_size: 15,
                link: data.person.email,
                prefix: getWordTranslatedById(4) + ': ',
                subfix: '',
                color: {
                    r:0,
                    g:0,
                    b:0,
                },
            },

            work_experience_title:{
                type: 'text',
                textType: 'underline',
                positionX: 20,
                positionY: 75,
                width: 200,
                height: 200,
                value:  getWordTranslatedById(10),
                font_size: 20,
                link: '',
                prefix: '',
                subfix: '',
                color: {
                    r:0,
                    g:0,
                    b:0,
                },
            },

            work_experience:{

                type: 'block',
                positionX: 0,
                positionY: 80,
                value: data.work_experience,
                width: 210,
                height: 50,
                margin: 20,
                padding: 20,

            }

            


            
        }
        
        //header
        
        this.positionItem(cv.header);
        this.positionItem(cv.name);
        this.positionItem(cv.birthdate);
        this.positionItem(cv.photo);
        this.positionItem(cv.age);
        this.positionItem(cv.email);
        this.positionItem(cv.nationality);
        
        //work experience

        this.positionItem(cv.work_experience_title);
        this.positionItem(cv.work_experience);



        
        //studies

        //knowledges

        //idioms

        //my better skills




        

    }

    addPage(){
        this.pdf.addPage();
        this.positionX = 0;
        this.positionY = 0;
    }

    setFont(fontName){
        this.pdf.setFont(fontName);
    }

    setText(
        text
    ){
        
        this.pdf.text(
            this.positionX,
            this.positionY,
            text
        );
    }

    getBase64Image(
        img,                         //img object
        grayScalePorcentage,         //boolean
        roundedBordersPorcentage,    //boolean
    ){

        var canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var ctx = canvas.getContext("2d");
    
    
        //console.log(ctx);
        if(grayScalePorcentage){
            ctx = this.grayScaleImage(
                ctx,
                grayScalePorcentage
            );
        }
        if(roundedBordersPorcentage){
            ctx = this.roundedBordersImage(
                ctx, 
                img
            );
        }
        
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, ""); 
    
    }
    

    grayScaleImage(
        ctx,
        porcentage
    ){
        ctx.filter = "grayscale("+porcentage+"%)";
        return ctx;
    }
    
    roundedBordersImage(
        ctx,
        img
    ){
        
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

    createBlock(props){
        
        var block = document.createElement("canvas");
        
        //block size
        var width = 793;//props.width*10;
        var height = 188;//props.width*10;
        //margin
        var margin =18;// props.margin*10;

        var padding = 18;
        //quantity elements 
        var cant = 2;


        block.setAttribute('width', width);
        block.setAttribute('height', height);

         
        

        var ctx = block.getContext("2d");
        ctx.fillStyle = "white";
        //ctx.fillRect(2, 2, width - 4, height - 4);
        ctx.fillRect(0, 0, width, height);


        ctx.lineWidth = 1;


        //top
        ctx.moveTo(0, 0);
        ctx.lineTo(width , 0);
        ctx.stroke(); 

        //left
        ctx.moveTo(0, 0);
        ctx.lineTo(0, height);
        ctx.stroke(); 
        
        //right
        ctx.moveTo(width, 0);
        ctx.lineTo(width , height);
        ctx.stroke(); 

        //bottom
        ctx.moveTo(0, height);
        ctx.lineTo(width, height);
        ctx.stroke(); 


        var rectWidth = (width - (padding * (cant+1))) / cant;
        var rectHeight = height - (padding * cant);

        //rect
        ctx.beginPath();
        ctx.rect(
            margin, 
            margin,
            rectWidth,
            rectHeight
        );
        ctx.stroke();



        //rect
        ctx.beginPath();
        ctx.rect( 
            margin*2+ rectWidth ,
            margin,
            rectWidth,
            rectHeight
        )
        ctx.stroke();


        //return block;

        var dataURL = block.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

    }

}

