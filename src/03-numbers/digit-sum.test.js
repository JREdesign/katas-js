// KATAS-JS/src/03-numbers/digit-sum.test.js
import { describe, it, expect } from "vitest";
import { digitSum } from "./digit-sum.js";

describe("digitSum", () => {
  it("suma los dígitos de un entero positivo", () => {
    expect(digitSum(1234)).toBe(10);
    expect(digitSum(505)).toBe(10);
  });

  it("devuelve 0 para el número 0", () => {
    expect(digitSum(0)).toBe(0);
  });

  it("ignora el signo de los enteros negativos", () => {
    expect(digitSum(-1234)).toBe(10);
    expect(digitSum(-90)).toBe(9);
  });

  it("lanza TypeError si el valor no es un entero", () => {
    expect(() => digitSum(12.5)).toThrow(TypeError);
    expect(() => digitSum("123")).toThrow(TypeError);
    expect(() => digitSum(NaN)).toThrow(TypeError);
  });
});
