import { describe, it, expect } from "vitest";
import { keysToArray } from "./keys-to-array.js";

describe("keysToArray", () => {
  it("devuelve las claves de un objeto", () => {
    expect(keysToArray({ a: 1, b: 2 })).toEqual(["a", "b"]);
  });
  it("devuelve array vacío para objeto vacío", () => {
    expect(keysToArray({})).toEqual([]);
  });
  it("lanza error con inputs inválidos", () => {
    expect(() => keysToArray(null)).toThrow();
    expect(() => keysToArray([])).toThrow();
    expect(() => keysToArray("no")).toThrow();
  });
});
