import { describe, expect, it } from "vitest";
import { sumEvens } from "./sum-evens.js";

describe("sumEvens", () => {
  it("suma únicamente los números pares", () => {
    expect(sumEvens([1, 2, 3, 4, 6])).toBe(12);
  });

  it("devuelve cero si no hay pares o el array está vacío", () => {
    expect(sumEvens([1, 3, 5])).toBe(0);
    expect(sumEvens([])).toBe(0);
  });

  it("admite números pares negativos y el cero", () => {
    expect(sumEvens([-4, -3, 0, 2])).toBe(-2);
  });

  it("rechaza entradas que no sean arrays de enteros", () => {
    expect(() => sumEvens("2,4")).toThrow(TypeError);
    expect(() => sumEvens([2, 3.5])).toThrow(TypeError);
    expect(() => sumEvens([2, NaN])).toThrow(TypeError);
  });
});
