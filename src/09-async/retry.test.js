import { describe, it, expect, vi } from "vitest";
import { retry } from "./retry.js";

describe("retry", () => {
  it("resuelve si algún intento funciona", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("fail"))
      .mockResolvedValue("ok");

    const result = await retry(fn, 2);
    expect(result).toBe("ok");
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("devuelve el primer resultado correcto sin hacer intentos extra", async () => {
    const fn = vi.fn().mockResolvedValue("ok");

    const result = await retry(fn, 3);

    expect(result).toBe("ok");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("lanza el último error cuando todos los intentos fallan", async () => {
    const firstError = new Error("primer fallo");
    const lastError = new Error("último fallo");
    const fn = vi
      .fn()
      .mockRejectedValueOnce(firstError)
      .mockRejectedValueOnce(lastError);

    await expect(retry(fn, 2)).rejects.toBe(lastError);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it("errores de parámetros", () => {
    expect(() => retry(1, 2)).toThrow(TypeError);
    expect(() => retry(() => {}, 0)).toThrow(TypeError);
  });
});
