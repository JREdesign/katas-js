import { describe, expect, it } from "vitest";
import { sumDigits, countDigits, digitSummary } from "./digit-sum.js";

describe("sumDigits", () => {
  it("suma los dígitos de números positivos y negativos", () => {
    expect(sumDigits(1234)).toBe(10);
    expect(sumDigits(-508)).toBe(13);
  });

  it("admite cero y números de una sola cifra", () => {
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(7)).toBe(7);
  });

  it("rechaza números decimales, valores no finitos y entradas no numéricas", () => {
    expect(() => sumDigits(1.5)).toThrow(TypeError);
    expect(() => sumDigits(Infinity)).toThrow(TypeError);
    expect(() => sumDigits("123")).toThrow(TypeError);
    expect(() => sumDigits(Number.MAX_SAFE_INTEGER + 1)).toThrow(TypeError);
  });
});

describe("countDigits", () => {
  it("cuenta los dígitos de enteros positivos y negativos sin contar el signo", () => {
    expect(countDigits(12345)).toBe(5);
    expect(countDigits(-907)).toBe(3);
  });

  it("considera el cero como un dígito", () => {
    expect(countDigits(0)).toBe(1);
    expect(countDigits(8)).toBe(1);
  });

  it("rechaza valores que no sean enteros seguros", () => {
    expect(() => countDigits(3.14)).toThrow(TypeError);
    expect(() => countDigits(NaN)).toThrow(TypeError);
    expect(() => countDigits(null)).toThrow(TypeError);
  });
});
