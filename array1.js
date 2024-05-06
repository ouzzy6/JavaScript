function adultFilter(persons) {
    let adults = [];
    for (let person of persons) {
        if (person.age >= 18) {
            adults.push(person);
        }
    }
    return adults;
}

const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];
   
const adults = adultFilter(persons);

console.log(adults);

//En este ejercicio usamos for...of para filtrar las personas mayored de edad creando un bucle.