import { describe, expect, it } from "vitest";
import { absoluteDifference } from "./absolute-difference.js";

describe("absoluteDifference", () => {
  it("calcula la diferencia absoluta", () => {
    expect(absoluteDifference(10, 4)).toBe(6);
    expect(absoluteDifference(4, 10)).toBe(6);
  });
  
 it("funciona con números negativos", () => {
    expect(absoluteDifference(-5, 5)).toBe(10);
    expect(absoluteDifference(-10, -4)).toBe(6);
  });

it("devuelve 0 si los números son iguales", () => {
    expect(absoluteDifference(5, 5)).toBe(0);
  });

it("funciona con decimales", () => {
    expect(absoluteDifference(2.5, 1)).toBe(1.5);
  });

it("lanza error con valores inválidos", () => {
    expect(() => absoluteDifference("10", 4)).toThrow(TypeError);
    expect(() => absoluteDifference(10, NaN)).toThrow(TypeError);
    expect(() => absoluteDifference(null, 1)).toThrow(TypeError);
  });
});
