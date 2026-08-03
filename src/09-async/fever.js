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

function crearErrorDeCancelacion() {
  const error = new Error("La operación fue cancelada.");
  error.name = "AbortError";

  return error;
}


function main() {
  const controlador = new AbortController();


