import { describe, expect, it } from "vitest";
import { sumDigits } from "./sum-digits.js";

describe("sumDigits", () => {
  it("suma los dígitos de un número", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(4567)).toBe(22);
  });

  it("funciona con números negativos", () => {
    expect(sumDigits(-123)).toBe(6);
  });

  it("devuelve 0 para cero", () => {
    expect(sumDigits(0)).toBe(0);
  });
