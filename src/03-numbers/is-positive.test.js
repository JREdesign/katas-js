import { describe, expect, it } from "vitest";
import { isPositive } from "./is-positive.js";

describe("isPositive", () => {
  it("devuelve true para números positivos", () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(10.5)).toBe(true);
  });
  it("considera que cero no es positivo", () => {
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-0)).toBe(false);
  });
  it("devuelve false para números negativos", () => {
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(-10.5)).toBe(false);
  });
