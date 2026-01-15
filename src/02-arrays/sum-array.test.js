// KATAS-JS/src/02-arrays/sum-array.test.js
import { describe, it, expect } from "vitest";
import { sumArray } from "./sum-array.js";

describe("sumArray", () => {
  it("suma números", () => {
      expect(sumArray([1, 2, 3])).toBe(6);
        });

          it("devuelve 0 si está vacío", () => {
              expect(sumArray([])).toBe(0);
                });

                  it("lanza error si no es array", () => {
                      expect(() => sumArray("no")).toThrow(TypeError);
                        });

                          it("lanza error si algún elemento no es number válido", () => {
                              expect(() => sumArray([1, "2"])).toThrow(TypeError);
                                  expect(() => sumArray([1, NaN])).toThrow(TypeError);
                                    });
                                    });