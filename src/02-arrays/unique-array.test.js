import { describe, it, expect } from "vitest";
import { uniqueArray } from "./unique-array.js";

describe("uniqueArray", () => {
  it("elimina duplicados manteniendo el orden de primera aparición", () => {
    expect(uniqueArray([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it("funciona con strings", () => {
    expect(uniqueArray(["a", "a", "b"])).toEqual(["a", "b"]);
  });

  it("devuelve array vacío si arr está vacío", () => {
    expect(uniqueArray([])).toEqual([]);
  });

  it("lanza error si no es array", () => {
    expect(() => uniqueArray("no")).toThrow(TypeError);
  });
});
