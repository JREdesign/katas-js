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

  it("lanza error si todos fallan", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("fail"));
    await expect(retry(fn, 2)).rejects.toThrow("fail");
  });

  it("errores de parámetros", () => {
    expect(() => retry(1, 2)).toThrow();
    expect(() => retry(() => {}, 0)).toThrow();
  });
});
