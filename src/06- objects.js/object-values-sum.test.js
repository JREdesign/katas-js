import { describe, it, expect } from "vitest";
import { objectValuesSum } from "./object-values-sum.js";

describe("objectValuesSum", () => {
  it("suma valores numéricos de un objeto", () => {
    expect(objectValuesSum({ a: 1, b: 2, c: 3 })).toBe(6);
  });
  
  it("devuelve 0 para objeto vacío", () => {
    expect(objectValuesSum({})).toBe(0);
  });
  
  it("lanza error si algún valor no es number válido", () => {
    expect(() => objectValuesSum({ a: 1, b: "2" })).toThrow();
    expect(() => objectValuesSum({ a: NaN })).toThrow();
  });
  
  it("lanza error con inputs inválidos", () => {
    expect(() => objectValuesSum(null)).toThrow();
    expect(() => objectValuesSum([])).toThrow();
  });
});
