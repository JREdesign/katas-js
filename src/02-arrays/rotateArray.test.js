import { describe, it, expect } from "vitest";
import { rotateArray } from "./rotateArray";

describe("rotateArray", () => {
  it("rota un array hacia la derecha", () => {
    expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
  });

  it("rota varias posiciones", () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  it("no rota si k = 0", () => {
    expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it("k mayor que la longitud", () => {
    expect(rotateArray([1, 2, 3, 4], 6)).toEqual([3, 4, 1, 2]);
  });

  it("rotación negativa", () => {
    expect(rotateArray([1, 2, 3, 4], -1)).toEqual([2, 3, 4, 1]);
  });

  it("rotación negativa grande", () => {
    expect(rotateArray([1, 2, 3, 4], -6)).toEqual([3, 4, 1, 2]);
  });

  it("array vacío", () => {
    expect(rotateArray([], 5)).toEqual([]);
  });

  it("no muta el array original", () => {
    const arr = [1, 2, 3, 4];
    rotateArray(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  it("lanza error si arr no es array", () => {
    expect(() => rotateArray("1234", 1)).toThrow(TypeError);
  });

  it("lanza error si k no es entero", () => {
    expect(() => rotateArray([1, 2, 3], 1.5)).toThrow(TypeError);
    expect(() => rotateArray([1, 2, 3], "2")).toThrow(TypeError);
  });
});
