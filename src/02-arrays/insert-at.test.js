import { describe, expect, it } from "vitest";
import { insertAt, insertManyAt } from "./insert-at.js";

describe("insertAt", () => {
  it("inserta un elemento al principio, en medio y al final", () => {
    expect(insertAt([1, 3], 0, 0)).toEqual([0, 1, 3]);
    expect(insertAt([1, 3], 1, 2)).toEqual([1, 2, 3]);
    expect(insertAt([1, 2], 2, 3)).toEqual([1, 2, 3]);
  });

  it("no modifica el array original", () => {
    const numbers = [1, 3];
    expect(insertAt(numbers, 1, 2)).toEqual([1, 2, 3]);
    expect(numbers).toEqual([1, 3]);
  });

  it("admite índices negativos desde el final del array", () => {
    expect(insertAt([1, 2, 4], -1, 3)).toEqual([1, 2, 3, 4]);
    expect(insertAt([2, 3], -2, 1)).toEqual([1, 2, 3]);
  });

  it("rechaza índices fuera de rango o no enteros", () => {
    expect(() => insertAt([1, 2], 3, 9)).toThrow(RangeError);
    expect(() => insertAt([1, 2], -3, 9)).toThrow(RangeError);
    expect(() => insertAt([1, 2], 1.5, 9)).toThrow(TypeError);
  });
});
