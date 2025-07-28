function saludarDespuesDe(nombre, callback) {
    setTimeout(() => {
        callback(nombre);
    }, 2000);
}

function mostrarSaludo(nombre) {
    console.log(`👋 ¡Hola, ${nombre}! ¿Cómo estás?`);
}

saludarDespuesDe("Ana", mostrarSaludo);
