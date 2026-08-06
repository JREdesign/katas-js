function ejecutarOperacionAsincrona(delayMs, signal) {
  return new Promise((resolve, reject) => {
    if (!Number.isFinite(delayMs) || delayMs < 0) {
      reject(
        new TypeError(
          "delayMs debe ser un número finito mayor o igual que cero."
        )
      );
      return;
    }

    if (signal?.aborted) {
      reject(crearErrorDeCancelacion());
      return;
    }

    let finalizada = false;

    const temporizadorId = setTimeout(() => {
      if (finalizada) {
        return;
      }

      finalizada = true;

      if (signal) {
        signal.removeEventListener("abort", cancelarOperacion);
      }

      resolve(`Operación completada después de ${delayMs} milisegundos.`);
    }, delayMs);

    function cancelarOperacion() {
      if (finalizada) {
        return;
      }

      finalizada = true;
      clearTimeout(temporizadorId);

      if (signal) {
        signal.removeEventListener("abort", cancelarOperacion);
      }

      reject(crearErrorDeCancelacion());
    }

    if (signal) {
      signal.addEventListener("abort", cancelarOperacion, {
        once: true,
      });
    }
  });
}

function main() {
  const controlador = new AbortController();

  ejecutarOperacionAsincrona(2_000, controlador.signal)
    .then((resultado) => {
      console.log(resultado);
      return "La cadena de Promises puede continuar.";
    })
    .then((mensaje) => {
      console.log(mensaje);
    })


