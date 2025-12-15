import { describe, it, expect } from "vitest";
import { factorial } from "./factorial.js";

describe("factorial", () => {
  it("devuelve 1 para 0 y 1", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  it("calcula factoriales de números pequeños", () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
  });

  it("lanza error con valores no válidos", () => {
    expect(() => factorial(-1)).toThrow(TypeError);
    expect(() => factorial(2.5)).toThrow(TypeError);
  });
});
