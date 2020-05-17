class Study{
    constructor( 
        title,
        type,
        state,
        startDate, 
        endDate,
        institution,
        description,
        programingTools
    ){
        this.title = title;
        this.type = type;
        this.state = state;
        this.startDate = new Date(startDate); 
        this.endDate = new Date(endDate);
        this.institution = institution;  
        this.description = description;
        this.time = new GenericFunction().dateDiff(this.startDate, this.endDate);
        this.programingTools = programingTools;
    }
}