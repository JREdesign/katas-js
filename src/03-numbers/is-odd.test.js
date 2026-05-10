import { describe, it, expect } from "vitest";
import { isOdd } from "./is-odd.js";

describe("isOdd", () => {
  it("devuelve true para impares", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(-3)).toBe(true);
  });
