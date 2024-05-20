const number = 15;

const myPromise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve('Número válido.');
    } else {
        reject('Número inválido.');
    }
});

myPromise
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error); 
    });
