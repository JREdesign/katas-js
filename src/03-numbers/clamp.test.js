import { describe, it, expect } from "vitest";
import { clamp } from "./clamp.js";

describe("clamp", () => {
  it("limita por debajo del mínimo", () => {
    expect(clamp(-10, 0, 100)).toBe(0);
  });

  it("limita por encima del máximo", () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });

  it("devuelve el valor si está dentro del rango", () => {
    expect(clamp(50, 0, 100)).toBe(50);
  });

  it("permite min y max iguales", () => {
    expect(clamp(10, 5, 5)).toBe(5);
  });

  it("lanza error si min > max", () => {
    expect(() => clamp(10, 20, 5)).toThrow(RangeError);
  });

  it("lanza error si inputs no son numbers válidos", () => {
    expect(() => clamp("10", 0, 100)).toThrow(TypeError);
    expect(() => clamp(10, "0", 100)).toThrow(TypeError);
    expect(() => clamp(10, 0, "100")).toThrow(TypeError);
    expect(() => clamp(NaN, 0, 100)).toThrow(TypeError);
  });
});
