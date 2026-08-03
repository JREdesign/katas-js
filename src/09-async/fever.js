function operacionAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const operacionCorrecta = true;

      if (operacionCorrecta) {
        resolve("Resultado correcto");
      } else {
        reject(new Error("La operación falló"));
      }
    }, 1000);
  });
}
async function operacionAsincrona() {
  return "Resultado correcto";
}
