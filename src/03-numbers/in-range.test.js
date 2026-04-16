import { describe, it, expect } from "vitest";
import { inRange } from "./in-range.js";

describe("inRange", () => {
  it("devuelve true si está dentro del rango", () => {
    expect(inRange(5, 1, 10)).toBe(true);
    expect(inRange(1, 1, 10)).toBe(true);
    expect(inRange(10, 1, 10)).toBe(true);
  });
