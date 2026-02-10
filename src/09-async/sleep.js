export function sleep(ms) {
      if (!Number.isInteger(ms) || ms < 0) {
          throw new TypeError("sleep: ms debe ser un entero >= 0");
            }
}