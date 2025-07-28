function descargarArchivo(nombreArchivo, callback) {
  console.log(`Descargando ${nombreArchivo}...`);
  
  setTimeout(() => {
    const mensaje = `Archivo ${nombreArchivo} descargado.`;
    callback(mensaje);
  }, 4000);
}

function procesarArchivo(mensaje, callback) {
  console.log("🔄 Procesando archivo...");
  
  setTimeout(() => {
    const mensajeProcesado = "Archivo procesado exitosamente.";
    callback(mensajeProcesado);
  }, 2000);
}

function finalizarProceso(mensaje) {
  console.log(mensaje);
}

descargarArchivo("documento.pdf", function(mensajeDescarga) {
  console.log(mensajeDescarga);
  
  procesarArchivo(mensajeDescarga, function(mensajeProcesado) {
    console.log(mensajeProcesado);
    
    finalizarProceso("🎉 Todo el proceso ha finalizado con éxito.");
  });
});
