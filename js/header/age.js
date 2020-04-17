function showAge(){
    var age = getAge('10/25/1996');
    document.querySelector('#age').textContent = 'Edad: ' + age + ' años';
}

//birthday must be in format MM/DD/YYYY
function getAge(birthday){
    
    var today = new Date();
    var birthDate = new Date(birthday);
    
    //console.log(today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear());
    //console.log(birthDate);

    if( (today.getDate() >= birthDate.getDate()) && (today.getMonth() >= birthDate.getMonth()) ){
        var age = today.getFullYear() - birthDate.getFullYear(); 
    }else{
        var age = (today.getFullYear() - birthDate.getFullYear()) - 1;
    }
    
    return age;
}