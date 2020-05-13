function load(){
    
    loadObjects();
    
    getPersonalData(data.objs[0].obj);
    getTimelineItemsHTMLText(data.objs[1].obj);

}

//load objects for the page
const data = { 'objs': [] };

function loadObjects(){
        
        
        var person = new Person('Santiago','Olivera','10/25/1996');
        
        var workExperience = [ 
            new Work(
                2015,
                "Pasantia en CODES S.A.", 
                '09/01/2015',
                '12/01/2015',
                'Descripcion Prueba',
                [
                    new ProgrammingTool('ASP.Net'),
                    new ProgrammingTool('SQL Server'),
                ]
            ), 
           new Work(
                2016,
                "CODES S.A.",
                '01/11/2016',
                '07/01/2017',
                'Descripcion Prueba',
                [
                    new ProgrammingTool('Drupal'),
                    new ProgrammingTool('MySQL'),
                    new ProgrammingTool('PHP')
                ]
            ),
            new Work(
                2018,
                "Sistemas Plenario S.A.", 
                '06/16/2018',
                '05/01/2019', 
                'Descripcion Prueba',
                [
                    new ProgrammingTool('Visual Basic.Net'),
                    new ProgrammingTool('SQL Server'),
                    new ProgrammingTool('C#'),
                ] 
            ),
            new Work(
                2019,
                "Istorming S.A.", 
                '05/02/2019', 
                '05/10/2020', 
                'Descripcion Prueba',
                [
                    new ProgrammingTool('Meta4'),
                    new ProgrammingTool('Oracle SQL with Toad'),
                    new ProgrammingTool('Java'),
                ]
            ), 
        ];

        //person data
        data.objs.push({
            'id': 'person',
            'obj': person
        });
        //timeline items
        data.objs.push({
            'id': 'work_experience',
            'obj': workExperience
        });

}