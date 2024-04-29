function sumUntil(maxValue) {
    let sum = 0; 
    for(let i = 1; i <= maxValue; i++) { 
        sum += i; 
    }
    return sum; 
}

console.log(sumUntil(5)); 

//En este ejercico hacemos una función que nos devuelve el resultado de la suma de los numeros 
// entre ellos hasta llegar al input que le indiquemos. Por ejemplo: input 5: 1+2+3+4+5 = 15