userSave(user);

const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  function userSave() {
    // Convert the user object to a JSON string
    const userJSON = JSON.stringify(user);
    // Save the JSON string to localStorage with the key 'user'
    localStorage.setItem('user', userJSON);
  }
  
  // Call the function to save the user object
  userSave();

  //Salta error porque estamos trabajando fuera de un entorno de navegador.
  