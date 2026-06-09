import { describe, it, expect } from "vitest";
import { cube } from "./cube.js";

describe("cube", () => {
  it("calcula el cubo de números positivos", () => {
    expect(cube(2)).toBe(8);
    expect(cube(3)).toBe(27);
  });
  
  it("calcula el cubo de números negativos", () => {
    expect(cube(-2)).toBe(-8);
  });
  
  it("devuelve 0 para 0", () => {
    expect(cube(0)).toBe(0);
  });

it("lanza error si no es number válido", () => {
    expect(() => cube("2")).toThrow();
    expect(() => cube(NaN)).toThrow();
  });
});
