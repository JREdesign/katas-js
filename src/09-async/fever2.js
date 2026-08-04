function esperar(milisegundos) {
  return new Promise((resolve) => {
    setTimeout(resolve, milisegundos);
  });
}

async function obtenerMensaje(nombre, opciones = {}) {
  const {
    tiempoEspera = 1000,
    reintentos = 3,
    mayusculas = false,
  } = opciones;
