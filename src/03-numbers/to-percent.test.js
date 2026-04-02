import { describe, it, expect } from "vitest";
import { toPercent } from "./to-percent.js";

describe("toPercent", () => {
  it("convierte a porcentaje", () => {
    expect(toPercent(0.5)).toBe(50);
    expect(toPercent(0.1234, 2)).toBe(12.34);
  });
  it("redondea según decimales", () => {
    expect(toPercent(0.1299, 1)).toBe(13);
  });
  it("errores con inputs inválidos", () => {
    expect(() => toPercent("0.5")).toThrow();
    expect(() => toPercent(0.5, -1)).toThrow();
  });
});
  it("maneja correctamente el 0", () => {
    expect(toPercent(0)).toBe(0);
    expect(toPercent(0, 2)).toBe(0);
  });

  it("maneja correctamente el 1 (100%)", () => {
    expect(toPercent(1)).toBe(100);
    expect(toPercent(1, 2)).toBe(100);
  });
