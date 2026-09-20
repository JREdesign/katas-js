import { describe, expect, it } from "vitest";
import { groupConsecutive } from "./group2.js";

describe("groupConsecutive (group2)", () => {
  it("agrupa consecutivos respetando el orden original", () => {
    expect(groupConsecutive([1, 2, 3, 7, 8, 10])).toEqual([
      [1, 2, 3],
      [7, 8],
      [10],
    ]);
  });

  it("separa duplicados y números no consecutivos", () => {
    expect(groupConsecutive([1, 2, 2, 4, 3])).toEqual([
      [1, 2],
      [2],
      [4],
      [3],
    ]);
  });

  it("devuelve un array vacío cuando no hay números", () => {
    expect(groupConsecutive([])).toEqual([]);
  });

  it("rechaza entradas que no sean arrays de enteros", () => {
    expect(() => groupConsecutive("1,2,3")).toThrow(TypeError);
    expect(() => groupConsecutive([1, 2.5, 3])).toThrow(TypeError);
  });
});
