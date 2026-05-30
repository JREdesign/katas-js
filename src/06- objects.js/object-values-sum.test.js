import { describe, it, expect } from "vitest";
import { objectValuesSum } from "./object-values-sum.js";

describe("objectValuesSum", () => {
  it("suma valores numéricos de un objeto", () => {
    expect(objectValuesSum({ a: 1, b: 2, c: 3 })).toBe(6);
  });
  it("devuelve 0 para objeto vacío", () => {
    expect(objectValuesSum({})).toBe(0);
  });
