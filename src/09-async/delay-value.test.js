import { describe, expect, it } from "vitest";
import { delayValue } from "./delay-value.js";

describe("delayValue", () => {
  it("resuelve con el valor recibido", async () => {
    await expect(delayValue("ok", 0)).resolves.toBe("ok");
  });

  it("conserva referencias de objetos", async () => {
    const value = { id: 1 };

    await expect(delayValue(value, 0)).resolves.toBe(value);
  });

  it("conserva valores null", async () => {
    await expect(delayValue(null, 0)).resolves.toBeNull();
  });

  it("valida el tiempo de espera", () => {
    expect(() => delayValue("ok", -1)).toThrow(TypeError);
    expect(() => delayValue("ok", Infinity)).toThrow(TypeError);
  });
});
