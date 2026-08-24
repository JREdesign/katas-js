import { describe, expect, it } from "vitest";
import { isPerfectSquare } from "./is-perfect-square.js";

describe("isPerfectSquare", () => {
  it("detecta cuadrados perfectos básicos", () => {
    expect(isPerfectSquare(0)).toBe(true);
    expect(isPerfectSquare(1)).toBe(true);
    expect(isPerfectSquare(4)).toBe(true);
    expect(isPerfectSquare(9)).toBe(true);
    expect(isPerfectSquare(16)).toBe(true);
  });

  it("descarta números que no son cuadrados perfectos", () => {
    expect(isPerfectSquare(2)).toBe(false);
    expect(isPerfectSquare(3)).toBe(false);
    expect(isPerfectSquare(8)).toBe(false);
    expect(isPerfectSquare(15)).toBe(false);
  });

  it("devuelve false para enteros negativos", () => {
    expect(isPerfectSquare(-1)).toBe(false);
    expect(isPerfectSquare(-4)).toBe(false);
    expect(isPerfectSquare(-25)).toBe(false);
  });

  it("lanza TypeError si recibe un valor que no es un entero", () => {
    expect(() => isPerfectSquare(2.5)).toThrow(TypeError);
    expect(() => isPerfectSquare("9")).toThrow(TypeError);
    expect(() => isPerfectSquare(null)).toThrow(TypeError);
  });
});
