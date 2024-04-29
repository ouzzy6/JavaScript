const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  person2.firstName = 'Simon';

  console.log(person1);
  console.log(person2);

  //Se cambian ambos valores porque ambos se refieren a la misma variable aunque tengan nombres diferentes se están señalando entre ellas.

  //En este ejercicio se pide explicación de porque al cambiar el nombre de una de las variables el resultado es el mismo en ambas.