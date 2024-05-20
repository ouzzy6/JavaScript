const isLogged = true;
//Starting from the previous exercise (promiseChaining.js), try to better handle all errors through the Error class and the catch method. Also add the finally method.



const firstPromise = new Promise((resolve, reject) => {
    if (isLogged) {
        const randomNumber = Math.random();
        resolve(randomNumber);
    } else {
        reject(new Error('User is not logged in.'));
    }
});

const secondPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({ name: "John", age: 24 });
        } else {
            reject(new Error('Number is less than or equal to 0.5.'));
        }
    });
};


firstPromise
    .then((randomNumber) => {
        return secondPromise(randomNumber);
    })
    .then((finalObject) => {
        console.log(finalObject);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    })
    .finally(() => {
        console.log('Process completed.');
    });
