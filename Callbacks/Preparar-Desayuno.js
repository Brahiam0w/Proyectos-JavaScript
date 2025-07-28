function prepararDesayuno(callback) {
    console.log("Preparando panqueques...");

    setTimeout(() => {
        const mensaje = "✅ Panqueques listos para servir.";
        callback(mensaje);
    }, 3000);
}

function servirDesayuno(mensaje) {
    console.log(mensaje);
}
prepararDesayuno(servirDesayuno);
