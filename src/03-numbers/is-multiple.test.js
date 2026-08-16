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
