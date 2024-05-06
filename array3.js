function calculateAverageAge(persons) {
    let totalAge = 0; 
    for (let person of persons) {
        totalAge += person.age; 
    }
    const average = totalAge / persons.length; 
    return average;
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
  
  const average = calculateAverageAge(persons);
  console.log(persons);
  console.log(average);

  //En este ejercicio usamos for...of para recorrer el array y creamos una operación que calculará la media de edad del array.