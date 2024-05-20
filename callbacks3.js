function repeatHello(callback) {
    const intervalId = setInterval(() => { callback(); }, 1000); 
    
    setTimeout(() => {
        clearInterval(intervalId); 
    }, 5000);
}

const helloCallback = () => {
    console.log("Hello");
};

repeatHello(helloCallback);

//Repetimos ejercicio callbacks 2 pero definiendo un clearInterval para no entrar en bucle infinito. 
