import { describe, it, expect } from "vitest";
import { inRange } from "./in-range.js";

describe("inRange", () => {
  it("devuelve true si está dentro del rango", () => {
    expect(inRange(5, 1, 10)).toBe(true);
    expect(inRange(1, 1, 10)).toBe(true);
    expect(inRange(10, 1, 10)).toBe(true);
  });
it("devuelve false si está fuera del rango", () => {
    expect(inRange(0, 1, 10)).toBe(false);
    expect(inRange(11, 1, 10)).toBe(false);
  });
  it("lanza error si min > max", () => {
    expect(() => inRange(5, 10, 1)).toThrow();
  });
  it("lanza error con inputs inválidos", () => {
    expect(() => inRange("5", 1, 10)).toThrow();
    expect(() => inRange(5, NaN, 10)).toThrow();
  });
});
