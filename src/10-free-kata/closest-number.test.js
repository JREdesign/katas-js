import { describe, expect, it } from "vitest";
import {
  closestNumber,
  closestNumberIndex,
  closestNumberDistance,
  closestNumberSummary,
  hasExactMatch,
  closestNumberTies,
  closestNumberTieCount,
  hasUniqueClosestNumber,
} from "./closest-number.js";

describe("closestNumber", () => {
  it("encuentra el valor más cercano al objetivo", () => {
    expect(closestNumber([2, 6, 10], 7)).toBe(6);
    expect(closestNumber([-8, -3, 4], -4)).toBe(-3);
  });

  it("elige la primera aparición cuando hay empate", () => {
    expect(closestNumber([4, 6, 8], 5)).toBe(4);
    expect(closestNumber([6, 4], 5)).toBe(6);
  });

  it("rechaza arrays vacíos y números no finitos", () => {
    expect(() => closestNumber([], 2)).toThrow(TypeError);
    expect(() => closestNumber([1, NaN], 2)).toThrow(TypeError);
    expect(() => closestNumber([1], Infinity)).toThrow(TypeError);
    expect(() => closestNumber("1,2", 1)).toThrow(TypeError);
  });
});

describe("closestNumberIndex y closestNumberDistance", () => {
  it("devuelve el índice de la primera coincidencia más cercana", () => {
    expect(closestNumberIndex([10, 3, 3, 8], 4)).toBe(1);
    expect(closestNumberIndex([6, 4], 5)).toBe(0);
  });

  it("calcula la distancia absoluta al objetivo", () => {
    expect(closestNumberDistance([1, 8, 15], 10)).toBe(2);
    expect(closestNumberDistance([-5, -1], -2)).toBe(1);
    expect(closestNumberDistance([4, 9], 9)).toBe(0);
  });

  it("valida los argumentos de ambas funciones", () => {
    expect(() => closestNumberIndex([], 1)).toThrow(TypeError);
    expect(() => closestNumberDistance([2], NaN)).toThrow(TypeError);
  });
});

describe("closestNumberSummary y hasExactMatch", () => {
  it("resume el valor, índice y distancia", () => {
    expect(closestNumberSummary([3, 7, 12], 8)).toEqual({
      value: 7,
      index: 1,
      distance: 1,
    });
  });

  it("detecta coincidencias exactas", () => {
    expect(hasExactMatch([2, 4, 6], 4)).toBe(true);
    expect(hasExactMatch([2, 4, 6], 5)).toBe(false);
  });
});

describe("closestNumberTies", () => {
  it("devuelve todos los valores empatados en orden de aparición", () => {
    expect(closestNumberTies([6, 4, 8, 4], 5)).toEqual([6, 4, 4]);
    expect(closestNumberTies([1, 3, 10], 3)).toEqual([3]);
  });

  it("cuenta todas las apariciones empatadas", () => {
    expect(closestNumberTieCount([6, 4, 4, 9], 5)).toBe(3);
    expect(closestNumberTieCount([1, 8, 12], 9)).toBe(1);
  });

  it("rechaza entradas inválidas", () => {
    expect(() => closestNumberTies([], 0)).toThrow(TypeError);
    expect(() => closestNumberTieCount([1, Infinity], 2)).toThrow(TypeError);
  });
});

describe("hasUniqueClosestNumber", () => {
  it("devuelve true si solo hay un elemento a la distancia mínima", () => {
    expect(hasUniqueClosestNumber([1, 5, 12], 6)).toBe(true);
    expect(hasUniqueClosestNumber([5], 6)).toBe(true);
  });
