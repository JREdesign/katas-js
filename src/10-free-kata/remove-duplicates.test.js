import { describe, expect, it } from "vitest";
import { removeDuplicates, findDuplicates, duplicatesSummary } from "./remove-duplicates.js";

describe("removeDuplicates", () => {
  it("elimina duplicados conservando el orden de aparición", () => {
    expect(removeDuplicates([3, 1, 3, 2, 1])).toEqual([3, 1, 2]);
  });

  it("admite arrays vacíos, negativos y decimales", () => {
    expect(removeDuplicates([])).toEqual([]);
    expect(removeDuplicates([-2, 1.5, -2, 1.5, 0])).toEqual([-2, 1.5, 0]);
  });

  it("no modifica el array original", () => {
    const original = [2, 2, 3];
    expect(removeDuplicates(original)).toEqual([2, 3]);
    expect(original).toEqual([2, 2, 3]);
  });

  it("rechaza entradas inválidas y números no finitos", () => {
    expect(() => removeDuplicates("1,2")).toThrow(TypeError);
    expect(() => removeDuplicates([1, "1"])).toThrow(TypeError);
    expect(() => removeDuplicates([1, NaN])).toThrow(TypeError);
    expect(() => removeDuplicates([Infinity])).toThrow(TypeError);
  });
});

describe("findDuplicates", () => {
  it("devuelve los números repetidos una sola vez, en orden de detección", () => {
    expect(findDuplicates([3, 1, 2, 1, 3, 3, 2])).toEqual([1, 3, 2]);
  });

  it("devuelve un array vacío si no existen repetidos", () => {
    expect(findDuplicates([1, 2, 3])).toEqual([]);
    expect(findDuplicates([])).toEqual([]);
  });

  it("valida la entrada sin modificarla", () => {
    const original = [4, 4, -2];
    expect(findDuplicates(original)).toEqual([4]);
    expect(original).toEqual([4, 4, -2]);
    expect(() => findDuplicates([1, NaN])).toThrow(TypeError);
  });
});

describe("duplicatesSummary", () => {
  it("resume los valores únicos, repetidos y sus cantidades", () => {
    expect(duplicatesSummary([3, 1, 3, 2, 1, 3])).toEqual({
      unique: [3, 1, 2],
      duplicates: [3, 1],
      total: 6,
      uniqueCount: 3,
      duplicateCount: 3,
    });
  });

  it("maneja arrays vacíos y arrays sin duplicados", () => {
    expect(duplicatesSummary([])).toEqual({
      unique: [],
      duplicates: [],
      total: 0,
      uniqueCount: 0,
      duplicateCount: 0,
    });
    expect(duplicatesSummary([2, 4])).toEqual({
      unique: [2, 4],
      duplicates: [],
      total: 2,
      uniqueCount: 2,
      duplicateCount: 0,
    });
  });
