import { describe, it, expect } from "vitest";
import { startsWithCI } from "./starts-with-ci.js";

describe("startsWithCI", () => {
  it("comprueba prefijo sin importar mayúsculas", () => {
    expect(startsWithCI("Hola Mundo", "ho")).toBe(true);
    expect(startsWithCI("Hola Mundo", "HO")).toBe(true);
  });
 it("devuelve false si no coincide", () => {
    expect(startsWithCI("Hola", "ad")).toBe(false);
  });
  it("errores si inputs no son strings", () => {
    expect(() => startsWithCI(1, "a")).toThrow();
    expect(() => startsWithCI("a", null)).toThrow();
  });
});
