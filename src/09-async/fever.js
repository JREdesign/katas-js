// async-low-level.js

/**
 * Ejecuta una operación asíncrona utilizando Promise directamente.
 *
 * @param {number} delayMs Tiempo de espera en milisegundos.
 * @param {AbortSignal} [signal] Señal opcional para cancelar la operación.
 * @returns {Promise<string>}
 */
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

/**
 * Crea un error compatible con operaciones cancelables.
 *
 * @returns {Error}
 */
function crearErrorDeCancelacion() {
  const error = new Error("La operación fue cancelada.");
  error.name = "AbortError";

  return error;
}

/**
 * Función principal de demostración.
 *
 * No está declarada con `async`: utiliza la cadena de Promises
 * directamente mediante `.then()`, `.catch()` y `.finally()`.
 */
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

  // Descomenta esta línea para cancelar la operación tras 500 ms:
  // setTimeout(() => controlador.abort(), 500);
}

main();
