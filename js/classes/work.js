class Work{

    constructor(
        year, 
        title, 
        startDate, 
        endDate,
        description,
        programingLanguages
    ){
        
        this.year = year;
        this.title = title;
        this.startDate = new Date(startDate); 
        this.endDate = new Date(endDate);
        this.description = description;
        this.tasks = null;
        this.time = new GenericFunction().dateDiff(this.startDate, this.endDate);
        this.programingLanguages = programingLanguages;
        
    }


    
    

}