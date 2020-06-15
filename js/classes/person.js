class Person{
    
    constructor(
        name,
        secondName,
        lastname, 
        birthdate,
        email,
        nationality,
        img
    ){
        this.name = name;
        this.secondName = secondName;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.nationality = nationality;
        this.img = img;
    }

    //get age person
    getAge(){
        var today = new Date();
        var birthDate = new Date(this.birthdate);
        
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