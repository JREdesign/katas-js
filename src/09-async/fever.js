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


