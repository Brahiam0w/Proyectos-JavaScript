const ventas = [
    { id: 1, idarticulo: 101, cantidad: 2, fecha: '2024-08-01' },
    { id: 2, idarticulo: 102, cantidad: 1, fecha: '2024-08-01' },
    { id: 3, idarticulo: 103, cantidad: 3, fecha: '2024-08-02' },
    { id: 4, idarticulo: 101, cantidad: 4, fecha: '2024-08-02' },
    { id: 5, idarticulo: 101, cantidad: 1, fecha: '2024-08-03' },
    { id: 6, idarticulo: 104, cantidad: 1, fecha: '2024-08-03' },
    { id: 7, idarticulo: 102, cantidad: 7, fecha: '2024-08-04' },
    { id: 8, idarticulo: 101, cantidad: 1, fecha: '2024-08-04' },
    { id: 9, idarticulo: 102, cantidad: 1, fecha: '2024-08-05' },
    { id: 10, idarticulo: 103, cantidad: 2, fecha: '2024-08-05' }
];

const articulos = [
    { idarticulo: 101, nombre: 'Televisor' },
    { idarticulo: 102, nombre: 'Nevera' },
    { idarticulo: 103, nombre: 'Licuadora' },
    { idarticulo: 104, nombre: 'Microondas' }
];

function obtenerVentas(callback) {
    setTimeout(() => {
        callback(ventas);
    }, 1000);
}

function obtenerArticuloPorId(idarticulo, callback) {
    setTimeout(() => {
        const articulo = articulos.find(a => a.idarticulo === idarticulo);
        callback(articulo);
    }, 500);
}
function procesarVentas() {
    obtenerVentas(function (listaVentas) {
        const resumen = {};

        listaVentas.forEach(venta => {
            if (!resumen[venta.idarticulo]) {
                resumen[venta.idarticulo] = 0;
            }
            resumen[venta.idarticulo] += venta.cantidad;
        });
        const articulosFiltrados = Object.entries(resumen)
            .filter(([id, total]) => total > 3);
        if (articulosFiltrados.length === 0) {
            console.log("No hay artículos con más de 3 ventas.");
            return;
        }
        articulosFiltrados.forEach(([id, total]) => {
            obtenerArticuloPorId(Number(id), function (articulo) {
                if (articulo) {
                    console.log(`${articulo.nombre} (id=${articulo.idarticulo}) tuvo ${total} ventas`);
                } else {
                    console.log(`Artículo con id=${id} no encontrado`);
                }
            });
        });
    });
}

procesarVentas();
