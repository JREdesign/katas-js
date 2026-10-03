import { describe, expect, it } from "vitest";
import {
  boundedSum,
  boundedSumDetails,
} from "./bounded-sum.js";

describe("boundedSum", () => {
  it("suma valores hasta alcanzar el límite", () => {
    expect(boundedSum([2, 3, 4, 1], 6)).toBe(5);
  });

  it("devuelve los detalles de los valores utilizados", () => {
    expect(boundedSumDetails([2, 3, 4, 1], 6)).toEqual({
      total: 5,
      used: [2, 3],
      count: 2,
    });
  });

  it("devuelve cero y ningún valor si el primer número supera el límite", () => {
    expect(boundedSum([10, 1, 2], 5)).toBe(0);
    expect(boundedSumDetails([10, 1, 2], 5)).toEqual({
      total: 0,
      used: [],
      count: 0,
    });
  });

  it("rechaza entradas inválidas", () => {
    expect(() => boundedSum("1,2,3", 5)).toThrow(TypeError);
    expect(() => boundedSum([1, 2, 3], Infinity)).toThrow(TypeError);
    expect(() => boundedSumDetails([1, NaN], 5)).toThrow(TypeError);
  });
});
