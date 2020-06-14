class Person{
    
    constructor(
        name,
        secondName,
        lastname, 
        birthday
    ){
        this.name = name;
        this.secondName = secondName;
        this.lastname = lastname;
        this.birthday = birthday;
    }

    //get age person
    getAge(){
        var today = new Date();
        var birthDate = new Date(this.birthday);
        
        if( (today.getDate() >= birthDate.getDate()) && (today.getMonth() >= birthDate.getMonth()) ){
            var age = today.getFullYear() - birthDate.getFullYear(); 
        }else{
            var age = (today.getFullYear() - birthDate.getFullYear()) - 1;
        }
        
        return age;
    }
    
    getName(){
        return this.name;
    }
    getLastName(){
        return this.lastname;
    }


}