//Starting from the previous exercise, write a method that recovers the data saved in localStorage and prints them in the console.

function retrieveUserFromLocalStorage() {
    // Retrieve the JSON string from localStorage
    const userJSON = localStorage.getItem('user');
    
    if (userJSON) {
      // Parse the JSON string back to an object
      const user = JSON.parse(userJSON);
      // Print the user object to the console
      console.log("User:", user);
      return user;
    } else {
      console.log("No user data found in localStorage.");
      return null;
    }
  }
  
  // Call the method to retrieve and print user data
  retrieveUserFromLocalStorage();

  //Salta error porque estamos trabajando fuera de un entorno de navegador.
  