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
