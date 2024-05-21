// URL del API que devuelve la lista de tareas
const url = 'https://jsonplaceholder.typicode.com/todos';

// Función para recuperar y mostrar la lista de tareas
async function fetchTodos() {
  try {
    // Realiza la solicitud HTTP con fetch
    const response = await fetch(url);

    // Verifica si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.statusText);
    }

    // Convierte la respuesta en formato JSON
    const todos = await response.json();

    // Muestra las tareas en la consola (o puedes manipular el DOM para mostrarlas en la página)
    console.log(todos);
  } catch (error) {
    // Maneja cualquier error que ocurra durante la solicitud
    console.error('Hubo un problema con la solicitud Fetch:', error);
  }
}

// Llama a la función para recuperar la lista de tareas
fetchTodos();
