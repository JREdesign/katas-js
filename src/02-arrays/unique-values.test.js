import { describe, expect, it } from "vitest";
import { uniqueValues } from "./unique-values.js";

describe("uniqueValues", () => {
  it("elimina valores duplicados manteniendo el orden", () => {
    expect(uniqueValues([1, 2, 1, 3, 2])).toEqual([1, 2, 3]);
  });

  it("funciona con strings", () => {
    expect(uniqueValues(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  it("considera NaN como un valor repetido", () => {
    expect(uniqueValues([NaN, 1, NaN])).toEqual([NaN, 1]);
  });

  it("distingue 0 y -0 usando Object.is", () => {
    expect(uniqueValues([0, -0, 0, -0])).toEqual([0, -0]);
  });

  it("devuelve un array vacío si recibe uno vacío", () => {
    expect(uniqueValues([])).toEqual([]);
  });

  it("lanza error si no recibe un array", () => {
    expect(() => uniqueValues("abc")).toThrow(TypeError);
    expect(() => uniqueValues(null)).toThrow(TypeError);
  });
});
