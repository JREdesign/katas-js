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
