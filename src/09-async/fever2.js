async function obtenerMensaje() {
  return "Hola desde una función async";
}

async function ejecutar() {
  try {
    const mensaje = await obtenerMensaje();
    console.log(mensaje);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

ejecutar();
