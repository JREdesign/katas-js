import { describe, expect, it } from "vitest";
import { isMultiple } from "./is-multiple.js";

describe("isMultiple", () => {
  it("devuelve true cuando el valor es múltiplo", () => {
    expect(isMultiple(10, 5)).toBe(true);
    expect(isMultiple(12, 3)).toBe(true);
  });

  it("devuelve false cuando el valor no es múltiplo", () => {
    expect(isMultiple(10, 3)).toBe(false);
    expect(isMultiple(7, 2)).toBe(false);
  });

  it("funciona con números negativos", () => {
    expect(isMultiple(-10, 5)).toBe(true);
    expect(isMultiple(10, -5)).toBe(true);
  });

         
  it("considera que cero es múltiplo de un divisor válido", () => {
    expect(isMultiple(0, 5)).toBe(true);
  });

  it("lanza error si el divisor es 0", () => {
    expect(() => isMultiple(10, 0)).toThrow(RangeError);
  });
