import { describe, it, expect } from "vitest";
import { isOdd } from "./is-odd.js";

describe("isOdd", () => {
  it("devuelve true para impares", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(-3)).toBe(true);
  });

  it("devuelve false para pares", () => {
    expect(isOdd(0)).toBe(false);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(-4)).toBe(false);
  });
