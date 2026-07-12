// Simula una operación que tarda 2 segundos
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const operacionCorrecta = true;


      if (operacionCorrecta) {
        resolve({
          nombre: "Jorge",
          edad: 30
        });
      } else {
        reject(new Error("No se pudieron obtener los datos"));
      }
    }, 2000);
  });
}

// Función asíncrona
async function mostrarDatos() {
  try {
    console.log("Cargando datos...");
    // Espera a que la promesa termine
    const datos = await obtenerDatos();
