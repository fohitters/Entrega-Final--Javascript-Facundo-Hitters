
const apiUrl = "https://dolarapi.com/v1/dolares";

const cotizacionesElement = document.getElementById("dolar");

async function obtenerCotizaciones() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.forEach(cotizacion => {
            const nombre = cotizacion.nombre;
            const compra = cotizacion.compra;
            const venta = cotizacion.venta;

            const cotizacionElement = document.createElement("p");
            cotizacionElement.textContent = `${nombre}: Compra: $${compra}, Venta: $${venta}`;

            cotizacionesElement.appendChild(cotizacionElement);
        });
    } catch (error) {
        console.error("Error al obtener las cotizaciones:", error);
    }
}


obtenerCotizaciones();


let recargar = document.getElementById("recargar");
recargar.addEventListener("click",function(){
    dolar.innerHTML = "";
    
    obtenerCotizaciones()
})