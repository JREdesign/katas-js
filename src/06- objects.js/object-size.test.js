import { describe, it, expect } from "vitest";
import { objectSize } from "./object-size.js";

describe("objectSize", () => {
  it("cuenta claves propias enumerables", () => {
    expect(objectSize({ a: 1, b: 2 })).toBe(2);
  });

  it("devuelve 0 para objeto vacío", () => {
    expect(objectSize({})).toBe(0);
  });
  it("lanza error con inputs inválidos", () => {
    expect(() => objectSize(null)).toThrow();
    expect(() => objectSize([])).toThrow();
    expect(() => objectSize("no")).toThrow();
  });
});
