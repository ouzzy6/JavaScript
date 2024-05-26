async function fetchTodoById(todoId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/4`);
    const todo = await response.json();
    return todo;
  }
  
  function createTodoElements(todo) {
    const container = document.getElementById('container');
  
    const h2 = document.createElement('h2');
    h2.textContent = todo.title;
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
  
    container.appendChild(h2);
    container.appendChild(checkbox);
  }
  
  async function displayTodoWithId(todoId) {
    try {
      const todo = await fetchTodoById(todoId);
      createTodoElements(todo);
    } catch (error) {
      console.error('Error fetching or creating todo:', error);
    }
  }
  
  // Call the function to display the todo with ID 4
  displayTodoWithId(4);
  
  //Salta error porque estamos trabajando fuera de un entorno de navegador.