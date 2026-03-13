import { describe, it, expect } from "vitest";
import { minArray } from "./min-array.js";

describe("minArray", () => {
  it("devuelve el mínimo", () => {
    expect(minArray([1, 3, 2])).toBe(1);
    expect(minArray([-10, -3, -7])).toBe(-10);
  });
