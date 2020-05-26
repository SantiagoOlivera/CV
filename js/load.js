function load(){
    
    loadObjects();
    //console.log(data.objs);
    
    getPersonalData(data.objs.person);
    
    setTimelineItemsHTMLText(data.objs.work_experience);
    setStudiesItemsHTMLText(data.objs.studies);
    setIdiomsItemsHTMLText(data.objs.idioms);
    setKnowledgesItemsHTMLText(data.objs.knowledges);

}

//load objects for the page
const data = { 'objs': [] };


function loadObjects(){
        
        
        var person = new Person(
            'Santiago',
            'Olivera',
            '10/25/1996'
        );
        
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

        var studies = [
            new Study(
            /*     
                title,
                type,
                state,
                startDate, 
                endDate,
                institution,
                description,
                programingTools 
            */
                'Técnico en Computación',
                'Secundario',
                'Completado',
                '03/01/2010',
                '12/01/2015',
                'Escuela Técnica Nro 35 Ing. Eduardo Latzina',
                'Descripcion de Prueba',
                [
                    new ProgrammingTool(
                        'C',
                    ),
                    new ProgrammingTool(
                        'C++'
                    ),
                    new ProgrammingTool(
                        'Visual Basic 6.0'
                    ),
                    new ProgrammingTool(
                        'MySQL'
                    ),
                    new ProgrammingTool(
                        'Java'
                    )
                ]
            ),
            new Study(
                    'Webmaster',
                    'Curso',
                    'Completado',
                    '06/01/2019',
                    '08/01/2019',
                    'UTN',
                    'Curso de HTML5, CSS3, Javascript, MySQL y PHP',
                    [
                        new ProgrammingTool(
                            'HTML5',
                        ),
                        new ProgrammingTool(
                            'CSS3'
                        ),
                        new ProgrammingTool(
                            'Javascript'
                        ),
                        new ProgrammingTool(
                            'MySQL'
                        ),
                        new ProgrammingTool(
                            'PHP'
                        )
                    ]
            ),
            new Study(
                    'Web Avanzado',
                    'Curso',
                    'Completado',
                    '09/01/2019',
                    '12/01/2019',
                    'UTN',
                    'Curso de Node.JS, Express, MongoDB, Angular y React. Manejo de ',
                    [   
                        new ProgrammingTool(
                            'Javascript'
                        ),
                        new ProgrammingTool(
                            'Node.JS',
                        ),
                        new ProgrammingTool(
                            'Express JS'
                        ),
                        new ProgrammingTool(
                            'MongoDB'
                        ),
                        new ProgrammingTool(
                            'Angular'
                        ),
                        new ProgrammingTool(
                            'React.JS'
                        )

                    ]
            ),
        ];


        var idioms = [

            new Idiom(
                'Español',
                '100'
            ),
            new Idiom(
                'Inglés',
                '90'
            )
        ];

        var knowledges = [
            
            new Knowledge(
                'Frontend',
                [
                    new ProgrammingTool(
                        'HTML',
                        100
                    ),
                    new ProgrammingTool(
                        'CSS',
                        90
                    ),
                    new ProgrammingTool(
                        'Javascript',
                        75
                    )
                ]
                
            ),
            new Knowledge(
                'Backend',
                [
                    new ProgrammingTool(
                        'Visual Basic',
                        60
                    ),
                    new ProgrammingTool(
                        'C#',
                        60
                    ),
                    new ProgrammingTool(
                        'PHP',
                        60
                    ),
                    new ProgrammingTool(
                        'Node JS',
                        60
                    )
                ]
                
            ),
            new Knowledge(
                'Data Base',
                [
                    new ProgrammingTool(
                        'SQL Server',
                        50
                    ),
                    new ProgrammingTool(
                        'Oracle',
                        50
                    ),
                    new ProgrammingTool(
                        'MySQL',
                        50
                    )
                ]
                
            )

        ];


        data.objs = {

            //person data
            'person' : person,
            //timeline items
            'work_experience': workExperience,
            //studies
            'studies': studies,
            //idioms
            'idioms': idioms,
            //knowledges
            'knowledges': knowledges
            
        }
            

}