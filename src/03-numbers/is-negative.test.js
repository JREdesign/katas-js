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
