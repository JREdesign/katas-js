import { describe, it, expect } from "vitest";
import { minArray } from "./min-array.js";

describe("minArray", () => {
  it("devuelve el mínimo", () => {
    expect(minArray([1, 3, 2])).toBe(1);
    expect(minArray([-10, -3, -7])).toBe(-10);
  });
it("lanza error si está vacío", () => {
    expect(() => minArray([])).toThrow();
  });

  it("lanza error si hay elementos no válidos", () => {
    expect(() => minArray([1, "2"])).toThrow();
    expect(() => minArray([1, NaN])).toThrow();
  });
it("lanza error si no es array", () => {
    expect(() => minArray("no")).toThrow();
  });
});
