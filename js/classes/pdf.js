class PDF{

    

    constructor(){
        this.pdf = new jsPDF();
        this.positionX = 0;
        this.positionY = 0;
        
    }
    
    
    posionateItem(
        positionX,
        positionY
    ){

    }

    addPage(){
        this.pdf.addPage();
        this.positionX = 0;
        this.positionY = 0;
    }

    savePDF(name){
        this.pdf.save(name + '.pdf');
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
        img,                    //img object
        grayScaleImage,         //boolean
        roundedBordersImage,    //boolean
    ){

        var canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var ctx = canvas.getContext("2d");
    
    
        //console.log(ctx);
        if(grayScaleImage===true){
            ctx = grayScaleImage(ctx);
        }
        if(roundedBordersImage==true){
            ctx = roundedBordersImage(ctx, img);
        }
        
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, ""); 
    
    }
    

    grayScaleImage(ctx){
        ctx.filter = "grayscale(90%)";
        return ctx;
    }
    
    roundedBordersImage(ctx,img){
        
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

}

