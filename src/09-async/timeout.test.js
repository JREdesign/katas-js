import { describe, expect, it } from "vitest";
import { withTimeout } from "./timeout.js";

describe("withTimeout", () => {
  it("resuelve si la promesa termina antes del límite", async () => {
    await expect(withTimeout(Promise.resolve("ok"), 50)).resolves.toBe("ok");
  });

  it("rechaza cuando se supera el tiempo límite", async () => {
    const slowPromise = new Promise((resolve) => {
      setTimeout(() => resolve("tarde"), 50);
    });

    await expect(withTimeout(slowPromise, 5)).rejects.toThrow("Tiempo de espera agotado");
  });

  it("valida los argumentos", async () => {
    await expect(withTimeout("no", 10)).rejects.toThrow(TypeError);
    await expect(withTimeout(Promise.resolve(), -1)).rejects.toThrow(TypeError);
  });
});
