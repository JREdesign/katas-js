import { describe, expect, it } from "vitest";
import {
  arrayDifference,
  symmetricDifference,
  arrayIntersection,
  compareArrays,
} from "./array-difference.js";

describe("arrayDifference", () => {
  it("devuelve los elementos exclusivos del primer array sin duplicados", () => {
    expect(arrayDifference([1, 2, 2, 3], [2, 4])).toEqual([1, 3]);
  });

  it("conserva el orden de aparición y admite arrays vacíos", () => {
    expect(arrayDifference([3, 1, 3, 2], [2])).toEqual([3, 1]);
    expect(arrayDifference([], [1, 2])).toEqual([]);
    expect(arrayDifference([1, 1], [])).toEqual([1]);
  });
});

describe("symmetricDifference", () => {
  it("devuelve los exclusivos de cada array, sin repetidos", () => {
    expect(symmetricDifference([1, 2, 2], [2, 3, 3])).toEqual([1, 3]);
  });
});

describe("arrayIntersection", () => {
  it("devuelve los elementos compartidos sin duplicados", () => {
    expect(arrayIntersection([3, 2, 2, 1], [2, 3, 4])).toEqual([3, 2]);
    expect(arrayIntersection([1], [2])).toEqual([]);
  });
});

describe("compareArrays", () => {
  it("resume los elementos exclusivos y comunes", () => {
    expect(compareArrays([1, 2, 2, 3], [2, 4, 4])).toEqual({
      onlyFirst: [1, 3],
      onlySecond: [4],
      common: [2],
    });
  });

  it("maneja dos arrays vacíos", () => {
    expect(compareArrays([], [])).toEqual({
      onlyFirst: [],
      onlySecond: [],
      common: [],
    });
  });

  it("no modifica los arrays originales", () => {
    const first = [3, 1, 3];
    const second = [3, 2];
    compareArrays(first, second);
    expect(first).toEqual([3, 1, 3]);
    expect(second).toEqual([3, 2]);
  });
});

describe("validación", () => {
  it("rechaza argumentos que no sean arrays en todas las funciones", () => {
    for (const fn of [arrayDifference, symmetricDifference, arrayIntersection, compareArrays]) {
      expect(() => fn(null, [])).toThrow(TypeError);
      expect(() => fn([], "2")).toThrow(TypeError);
    }
  });
});
