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
