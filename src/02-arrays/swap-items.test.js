import { describe, expect, it } from "vitest";
import { swapItems } from "./swap-items.js";

describe("swapItems", () => {
  it("intercambia dos elementos del array", () => {
    expect(swapItems(["a", "b", "c"], 0, 2)).toEqual(["c", "b", "a"]);
  });

  it("mantiene el original sin modificaciones", () => {
    const original = [10, 20, 30];
    const result = swapItems(original, 0, 1);

    expect(result).toEqual([20, 10, 30]);
    expect(original).toEqual([10, 20, 30]);
    expect(result).not.toBe(original);
  });

  it("devuelve una copia cuando los índices coinciden", () => {
    const original = [1, 2];
    const result = swapItems(original, 1, 1);

    expect(result).toEqual(original);
    expect(result).not.toBe(original);
  });

  it("rechaza entradas inválidas e índices fuera de rango", () => {
    expect(() => swapItems("abc", 0, 1)).toThrow(TypeError);
    expect(() => swapItems([], 0, 0)).toThrow(RangeError);
    expect(() => swapItems([1, 2], -1, 1)).toThrow(RangeError);
    expect(() => swapItems([1, 2], 0, 2)).toThrow(RangeError);
    expect(() => swapItems([1, 2], 0.5, 1)).toThrow(RangeError);
  });
});
