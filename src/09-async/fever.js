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
          .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Operación cancelada correctamente.");
        return;
      }

      console.error("Error durante la operación:", error);
    })
    .finally(() => {
      console.log("La operación asíncrona ha terminado.");
    });
      });
    }
  });
}



