import { describe, expect, it } from "vitest";
import {
  rotateArray,
  rotateArrayDetails,
} from "./rotate-array.js";

describe("rotateArray", () => {
  it("rota un array hacia la derecha", () => {
    expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
    expect(rotateArray([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
  });

  it("devuelve metadatos de la rotación", () => {
    expect(rotateArrayDetails(["a", "b", "c"], 1)).toEqual({
      rotated: ["c", "a", "b"],
      offset: 1,
      changed: true,
    });
  });

  it("admite rotaciones negativas y mayores que la longitud", () => {
    expect(rotateArray([1, 2, 3, 4], -1)).toEqual([2, 3, 4, 1]);
    expect(rotateArray([1, 2, 3], 4)).toEqual([3, 1, 2]);
  });

  it("maneja arrays vacíos y rotaciones sin cambio", () => {
    expect(rotateArray([], 3)).toEqual([]);
    expect(rotateArrayDetails([1, 2, 3], 3)).toEqual({
      rotated: [1, 2, 3],
      offset: 0,
      changed: false,
    });
  });

  it("rechaza entradas inválidas", () => {
    expect(() => rotateArray("123", 1)).toThrow(TypeError);
    expect(() => rotateArray([1, 2, 3], 1.5)).toThrow(TypeError);
  });
});
