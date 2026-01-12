import { describe, it, expect } from "vitest";
import { factorial } from "./factorial.js";

describe("factorial", () => {
  it("calcula factorial de 0 y 1", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  it("calcula factorial de números pequeños", () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
  });

  it("calcula factorial de un número mayor", () => {
    expect(factorial(10)).toBe(3628800);
  });

  it("lanza error si no es entero", () => {
    expect(() => factorial(2.5)).toThrow();
    expect(() => factorial("5")).toThrow();
  });

  it("lanza error si es negativo", () => {
    expect(() => factorial(-1)).toThrow();
    expect(() => factorial(-10)).toThrow();
  });
});
