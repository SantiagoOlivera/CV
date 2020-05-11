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
                    new ProgramingLanguage('ASP.Net'),
                    new ProgramingLanguage('SQL Server'),
                ]
            ), 
           new Work(
                2016,
                "CODES S.A.",
                '01/11/2016',
                '07/01/2017',
                'Descripcion Prueba',
                [
                    new ProgramingLanguage('Drupal'),
                    new ProgramingLanguage('MySQL'),
                    new ProgramingLanguage('PHP')
                ]
            ),
            new Work(
                2018,
                "Sistemas Plenario S.A.", 
                '06/16/2018',
                '05/01/2019', 
                'Descripcion Prueba',
                [
                    new ProgramingLanguage('Visual Basic.Net'),
                    new ProgramingLanguage('SQL Server'),
                    new ProgramingLanguage('C#'),
                ] 
            ),
            new Work(
                2019,
                "Istorming S.A.", 
                '05/02/2019', 
                '05/10/2020', 
                'Descripcion Prueba',
                [
                    new ProgramingLanguage('Meta4'),
                    new ProgramingLanguage('Oracle SQL with Toad'),
                    new ProgramingLanguage('Java'),
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