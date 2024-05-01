function printName(){
    let helloName = 'Hello John';
    function inner(){
        return helloName; 
    }
    return inner(); 
}

console.log(printName()); 

//En este ejercicio practicamos el closure, creamos una función dentro de la función padre que nos devolverá el resultado de la primera función.
