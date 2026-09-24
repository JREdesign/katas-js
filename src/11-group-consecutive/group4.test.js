import { describe, expect, it } from "vitest";
import { groupByParity } from "./group4.js";

describe("group4", () => {
  it("agrupa números pares e impares manteniendo el orden", () => {
    expect(groupByParity([1, 2, 3, 4, 5, 6])).toEqual({
      even: [2, 4, 6],
      odd: [1, 3, 5],
    });
  });

  it("agrupa correctamente números negativos y cero", () => {
    expect(groupByParity([-3, -2, -1, 0, 1, 2])).toEqual({
      even: [-2, 0, 2],
      odd: [-3, -1, 1],
    });
  });

  it("no modifica el array original", () => {
    const numbers = [1, 2, 3, 4];
    const original = [...numbers];

    groupByParity(numbers);

    expect(numbers).toEqual(original);
  });

  it("devuelve grupos vacíos cuando no hay números", () => {
    expect(groupByParity([])).toEqual({ even: [], odd: [] });
  });

  it("rechaza entradas que no sean arrays de enteros", () => {
    expect(() => groupByParity("1,2,3")).toThrow(TypeError);
    expect(() => groupByParity([1, 2.5, 3])).toThrow(TypeError);
  });
});
