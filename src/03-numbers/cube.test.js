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

  it("calcula correctamente el cubo de números decimales positivos", () => {
    expect(cube(1.5)).toBeCloseTo(3.375);
    expect(cube(0.5)).toBeCloseTo(0.125);
  });

  it("calcula correctamente el cubo de números decimales negativos", () => {
    expect(cube(-1.5)).toBeCloseTo(-3.375);
    expect(cube(-0.5)).toBeCloseTo(-0.125);
  });

  it("calcula correctamente el cubo de 1 y -1", () => {
    expect(cube(1)).toBe(1);
    expect(cube(-1)).toBe(-1);
  });
});
