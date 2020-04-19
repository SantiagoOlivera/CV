function load(){
    loadObjects();
    getPersonalData(data.objs[0].obj);
}

//load objects for the page
const data = { 'objs': [] };

function loadObjects(){
        
        var person = new Person('Santiago','Olivera','10/25/1996');
        data.objs.push( {
            'id': 'person',
            'obj': person
        }     
    );

}