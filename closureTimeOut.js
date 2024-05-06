function printName(){
    let helloName = 'Hello John';
    function inner(){
        return helloName; 
    }
    return inner(); 
}

setTimeout(function() {
    console.log(printName());
}, 1 * 1000);

//Esto sería un closure como en el ejemplo anterior pero añadiendo una función externa para imprimir la variable después de 1 segundo.