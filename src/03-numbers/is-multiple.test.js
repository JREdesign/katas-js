import { describe, expect, it } from "vitest";
import { isMultiple } from "./is-multiple.js";

describe("isMultiple", () => {
  it("devuelve true cuando el valor es múltiplo", () => {
    expect(isMultiple(10, 5)).toBe(true);
    expect(isMultiple(12, 3)).toBe(true);
  });
