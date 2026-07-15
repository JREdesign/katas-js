import { describe, expect, it } from "vitest";
import { isNegative } from "./is-negative.js";

describe("isNegative", () => {
  it("devuelve true para números negativos", () => {
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(-10.5)).toBe(true);
  });
  it("devuelve false para números positivos", () => {
    expect(isNegative(1)).toBe(false);
    expect(isNegative(10.5)).toBe(false);
  });
  it("considera que cero no es negativo", () => {
    expect(isNegative(0)).toBe(false);
    expect(isNegative(-0)).toBe(false);
  });
   it("lanza error si no recibe un número válido", () => {
    expect(() => isNegative("1")).toThrow(TypeError);
    expect(() => isNegative(NaN)).toThrow(TypeError);
    expect(() => isNegative(undefined)).toThrow(TypeError);
  });
});
