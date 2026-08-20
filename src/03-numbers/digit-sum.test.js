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
});
