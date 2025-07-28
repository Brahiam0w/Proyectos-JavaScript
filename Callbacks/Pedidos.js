
const ingredientes = [
  { nombre: "Pollo", tiempo: 1500 },
  { nombre: "Arroz", tiempo: 1000 },
  { nombre: "Verduras", tiempo: 1200 },
  { nombre: "Salsa", tiempo: 800 },
  { nombre: "Especias", tiempo: 500 }
];


const cocineros = [
  { nombre: "Cocinero A", ingredientes: [ingredientes[0], ingredientes[1]] },
  { nombre: "Cocinero B", ingredientes: [ingredientes[2], ingredientes[3], ingredientes[4]] } 
];

function prepararIngredientes(cocinero) {
  return new Promise((resolve) => {
    console.log(`👨‍🍳 ${cocinero.nombre} comenzó a preparar sus ingredientes...`);


    let totalTiempo = 0;
    cocinero.ingredientes.forEach(ingrediente => {
      totalTiempo += ingrediente.tiempo;
    });
    const tiempoAleatorio = Math.floor(Math.random() * 2000) + 1000; // 1000 - 3000ms
    const tiempoFinal = totalTiempo + tiempoAleatorio;

    setTimeout(() => {
      console.log(`✅ ${cocinero.nombre} terminó de preparar: ${cocinero.ingredientes.map(i => i.nombre).join(", ")}`);
      resolve(`${cocinero.nombre} listo`);
    }, tiempoFinal);
  });
}

function procesarPedido() {
  const promesasCocineros = cocineros.map(cocinero => prepararIngredientes(cocinero));

  Promise.all(promesasCocineros).then(resultados => {
    console.log("\n🎉 Pedido listo. Todos los cocineros terminaron.");
    resultados.forEach(r => console.log("✔️", r));
  });
}

procesarPedido();
