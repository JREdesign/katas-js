import { describe, expect, it } from "vitest";
import {
  groupConsecutive,
  summarizeConsecutiveGroups,
} from "./group3.js";

describe("group3", () => {
  it("agrupa números consecutivos manteniendo el orden", () => {
    expect(groupConsecutive([1, 2, 3, 7, 8, 10])).toEqual([
      [1, 2, 3],
      [7, 8],
      [10],
    ]);
  });

  it("resume el inicio, final y longitud de cada grupo", () => {
    expect(summarizeConsecutiveGroups([-2, -1, 0, 4, 5, 5])).toEqual([
      { start: -2, end: 0, length: 3 },
      { start: 4, end: 5, length: 2 },
      { start: 5, end: 5, length: 1 },
    ]);
  });

  it("devuelve arrays vacíos cuando no hay números", () => {
    expect(groupConsecutive([])).toEqual([]);
    expect(summarizeConsecutiveGroups([])).toEqual([]);
  });

  it("rechaza entradas que no sean arrays de enteros", () => {
    expect(() => groupConsecutive("1,2,3")).toThrow(TypeError);
    expect(() => summarizeConsecutiveGroups([1, 2.5])).toThrow(TypeError);
  });
});
