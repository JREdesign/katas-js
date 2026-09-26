import { describe, expect, it } from "vitest";
import {
  countConsecutiveGroups,
  groupConsecutive,
} from "./group5.js";

describe("group5", () => {
  it("agrupa números consecutivos manteniendo el orden", () => {
    expect(groupConsecutive([1, 2, 3, 7, 8, 10])).toEqual([
      [1, 2, 3],
      [7, 8],
      [10],
    ]);
  });

  it("cuenta correctamente los grupos consecutivos", () => {
    expect(countConsecutiveGroups([1, 2, 5, 6, 9])).toBe(3);
  });

  it("devuelve resultados vacíos para un array vacío", () => {
    expect(groupConsecutive([])).toEqual([]);
    expect(countConsecutiveGroups([])).toBe(0);
  });

  it("rechaza entradas que no sean arrays de enteros", () => {
    expect(() => groupConsecutive("1,2,3")).toThrow(TypeError);
    expect(() => countConsecutiveGroups([1, 2.5, 3])).toThrow(TypeError);
  });
});
