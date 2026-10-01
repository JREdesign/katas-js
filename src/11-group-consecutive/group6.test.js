import { describe, expect, it } from "vitest";
import {
  groupConsecutive,
  longestConsecutiveGroup,
} from "./group6.js";

describe("group6", () => {
  it("agrupa números consecutivos manteniendo el orden", () => {
    expect(groupConsecutive([1, 2, 3, 7, 8, 10])).toEqual([
      [1, 2, 3],
      [7, 8],
      [10],
    ]);
  });

  it("devuelve el grupo consecutivo más largo", () => {
    expect(longestConsecutiveGroup([5, 6, 1, 2, 3, 9])).toEqual([
      1, 2, 3,
    ]);
  });

  it("devuelve un array vacío si no hay números", () => {
    expect(groupConsecutive([])).toEqual([]);
    expect(longestConsecutiveGroup([])).toEqual([]);
  });

  it("rechaza entradas que no sean arrays de enteros", () => {
    expect(() => groupConsecutive("1,2,3")).toThrow(TypeError);
    expect(() => longestConsecutiveGroup([1, 2.5, 3])).toThrow(TypeError);
  });
});
