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

  it("rechaza un primer argumento que no sea un array", () => {
    expect(() => insertAt("abc", 1, "x")).toThrow(TypeError);
  });
});

describe("insertManyAt", () => {
  it("inserta varios elementos sin alterar el array original", () => {
    const original = [1, 4];
    const values = [2, 3];
    expect(insertManyAt(original, 1, values)).toEqual([1, 2, 3, 4]);
    expect(original).toEqual([1, 4]);
    expect(values).toEqual([2, 3]);
  });

  it("admite índices negativos y la inserción en un array vacío", () => {
    expect(insertManyAt([1, 4], -1, [2, 3])).toEqual([1, 2, 3, 4]);
    expect(insertManyAt([], 0, ["a", "b"])).toEqual(["a", "b"]);
  });

  it("admite insertar una lista vacía", () => {
    expect(insertManyAt([1, 2], 1, [])).toEqual([1, 2]);
  });

  it("valida el array, el índice y los valores a insertar", () => {
    expect(() => insertManyAt(null, 0, [1])).toThrow(TypeError);
    expect(() => insertManyAt([1], 0.5, [2])).toThrow(TypeError);
    expect(() => insertManyAt([1], 2, [2])).toThrow(RangeError);
    expect(() => insertManyAt([1], 0, "2")).toThrow(TypeError);
  });
});
