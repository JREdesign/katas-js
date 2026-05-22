import { describe, it, expect } from "vitest";
import { square } from "./square.js";

describe("square", () => {
  it("calcula el cuadrado de números positivos", () => {
    expect(square(2)).toBe(4);
    expect(square(5)).toBe(25);
  });
  it("calcula el cuadrado de números negativos", () => {
    expect(square(-3)).toBe(9);
  });
  it("devuelve 0 para 0", () => {
    expect(square(0)).toBe(0);
  });
