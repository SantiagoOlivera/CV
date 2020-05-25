class Knowledge{


    constructor(
        title,
        programingTools
    ){

        this.title = title,
        this.programingTools = programingTools;
        
        this.calcLevel();

    }

    calcLevel(){

        var programingToolsLevels = [];
            
        if(this.programingTools.length!==0){
            
            this.programingTools.forEach(element => {
                programingToolsLevels.push(
                    Number.parseInt(
                        element.level
                    )
                );
            })

        }


        this.setLevel( new GenericFunction().prom(programingToolsLevels) );

    }

    setLevel(level){
        this.level = level;
    }


    
}