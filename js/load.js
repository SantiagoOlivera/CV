function load(){
    
    //default screen properties
    setDefaultProperties(); 

    loadObjects();
    //console.log(data.objs);

    setPersonalDataHTMLText(data.objs.person);
    
    //load html data
    setTimelineItemsHTMLText(data.objs.work_experience);
    setStudiesItemsHTMLText(data.objs.studies);
    setIdiomsItemsHTMLText(data.objs.idioms);
    setKnowledgesItemsHTMLText(data.objs.knowledges);
    setMyBetterSkillsItemsHTMLText(data.objs.my_better_skills);


    //trastalate objects description and titles according selected idiom:
    //0-Spanish
    //1-English
    //2-German
    translate(0);

}

//load objects for the page
const data = { 'objs': [] };


function loadObjects(){
        
        
        var person = new Person(
            'Santiago',
            'Ariel',
            'Olivera',
            new Date('10/25/1996'),
            'olivera.santiagoariel@gmail.com',
            ['Argentina',5],
            '/img/profile/profile-photo.jpg'
        );

        
        var workExperience = [ 
            new Work(
                2015,
                ["Pasantia en CODES S.A.", 0], 
                new Date('09/01/2015'),
                new Date('12/01/2015'),
                ['Pasantía en la Empresa CODES S.A. realizada durante el ultimo año de la escuela secundaria',0],
                [
                    new ProgrammingTool('ASP.Net'),
                    new ProgrammingTool('SQL Server'),
                ]
            ), 
           new Work(
                2016,
                ["CODES S.A.",0],
                new Date('01/11/2016'),
                new Date('07/01/2017'),
                ['Programación web con el CMS Drupal y PHP. Manejo de consultas en Base de Datos MySQL',0],
                [
                    new ProgrammingTool('Drupal'),
                    new ProgrammingTool('MySQL'),
                    new ProgrammingTool('PHP')
                ]
            ),
            new Work(
                2018,
                ["Sistemas Plenario S.A.",0], 
                new Date('06/16/2018'),
                new Date('05/01/2019'), 
                ['Programación de aplicaciones de escritorio y web de sistemas de administración contable con Visual Basic y C# con el framework .Net. Manejo de consultas Base de Datos SQL Server. Desarrollo de reportes utilizando DevExpress y Crystal Reports',0],
                [
                    new ProgrammingTool('Visual Basic'),
                    new ProgrammingTool('C#'),
                    new ProgrammingTool('SQL Server'),
                ] 
            ),
            new Work(
                2019,
                ["Istorming S.A.",0], 
                new Date('05/02/2019'), 
                new Date(), /* actualidad */
                ['Programación en Meta4. Manejo de Base de Datos Oracle SQL. Programación de integraciones API REST con Java. Desarrollo de reportes con Meta4',0],
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
                ['Técnico en Computación',26],
                ['Escuela Secundaria',29],
                ['Completado',28],
                new Date('03/01/2010'),
                new Date('12/01/2015'),
                ['Escuela Técnica Nro 35 Ing. Eduardo Latzina', 0],
                ['Titulo de Técnico en Computación. Durante este periodo tuve mis primeras introducciones a los conocimientos en programación programando con C, C++, Visual Basic.6, y Java. Adquirí conocimientos en programación secuencial, eventos y Programación orientada a objetos(POO). Manejo de consultas de Bases de Datos MySQL creacion edicion eliminación de Cursores, Stored Procedures y Triggers', 0],
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
                    ['Webmaster',0],
                    ['Curso de Programación',27],
                    ['Completado',28],
                    new Date('06/01/2019'),
                    new Date('08/01/2019'),
                    'UTN',
                    ['Curso de HTML5, CSS3, Javascript, MySQL y PHP', 0],
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
                    ['Web Avanzado', 0],
                    ['Curso de Programación', 27],
                    ['Completado', 28],
                    new Date('09/01/2019'),
                    new Date('12/01/2019'),
                    'UTN',
                    ['Curso de Node.JS, Express, MongoDB, Angular y React', 0],
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
                //First Element idiom title
                //Second is the idtranslate
                ['Spanish', 7],
                '100'
            ),
            new Idiom(
                ['English', 8],
                '90'
            )
        ];

        var knowledges = [
            
            new Knowledge(
                ['Frontend',0],
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
                ['Backend', 0],
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
                ['Data Base', 25],
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

        var myBetterSkills = [
            new Skill(
                ['Desarrollo de Frontend',0],
                ['Considero que desenvuelvo muy bien en el manejo, desarrollo frontend con HTML, CSS y Javascript',0]
            ),
            new Skill(
                ['Manejo de Consultas SQL',0],
                ['Considero que tengo gran habilidad para crear y analizar consultas SQL',0]
            ),
            new Skill(
                ['Análisis de código y funcionamiento',0],
                ['Me desenvuelvo muy bien analizando código y analizando su funcionamiento',0]
            ),
            new Skill(
                ['Desarrollo de Reportes',0],
                ['Una de las tareas más frecuentes que he tenido en mis diferentes trabajos es el desarrollo de reportes digitales con herrmientas como Crystal Reports, DevExpress y la herramienta de desarrollo de reportes de Meta4',0]
            ),
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
            'knowledges': knowledges,
            //myBetterSkills
            'my_better_skills': myBetterSkills,
            
        }
            

}


function setDefaultProperties(){
    if(window.innerWidth<800){
        openAndCloseNavContainer();
    }
}