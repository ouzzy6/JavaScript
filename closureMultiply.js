function multiplyByTwo(num) {
    let number = 2;
    function inner() {
        return num * number;
    }
    return inner;
}

console.log(multiplyByTwo(4)());

//En este ejercicio creamos un closure que nos multiplica el valor de number por el input num que especifiquemos. 