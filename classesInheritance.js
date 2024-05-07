


class Persons2{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    }
    
    const developer2 = new Persons2('Moises', 'De Lima')
    console.log(developer2)
    
    class DevFriend extends Persons2{
        constructor(firstName, lastName, age, address){
    super (firstName, lastName);
    if(typeof age != 'number'){
        this.age = 'Error en tipo de dato.'
    }
    else{
        this.age = age
    }
    this.address = address;
        }
    }
    
   