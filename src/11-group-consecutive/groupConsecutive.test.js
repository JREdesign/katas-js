import { describe, it, expect } from "vitest";
import { groupConsecutive } from "./groupConsecutive.js";

describe("groupConsecutive", () => {
  it("agrupa números consecutivos manteniendo el orden", () => {
    expect(groupConsecutive([1, 2, 3, 7, 8, 10])).toEqual([
      [1, 2, 3],
      [7, 8],
      [10],
    ]);
  });

  it("devuelve un grupo por elemento cuando no hay consecutivos", () => {
    expect(groupConsecutive([2, 4, 6])).toEqual([[2], [4], [6]]);
  });

  it("devuelve un único grupo cuando todos son consecutivos", () => {
    expect(groupConsecutive([-2, -1, 0, 1])).toEqual([[-2, -1, 0, 1]]);
  });

  it("devuelve un array vacío para una entrada vacía", () => {
    expect(groupConsecutive([])).toEqual([]);
  });

  it("no considera los duplicados como consecutivos", () => {
    expect(groupConsecutive([1, 2, 2, 3])).toEqual([[1, 2], [2, 3]]);
  });

  it("lanza error si la entrada no es un array", () => {
    expect(() => groupConsecutive("1,2,3")).toThrow(TypeError);
  });

  it("lanza error si algún valor no es entero", () => {
    expect(() => groupConsecutive([1, 2.5, 3])).toThrow(TypeError);
  });
});
