import { describe, expect, it } from "vitest";
import {
  clampNumber,
  isWithinRange,
  clampNumbers,
} from "./clamp-number.js";

describe("clampNumber", () => {
  it("mantiene los valores dentro del intervalo", () => {
    expect(clampNumber(5, 0, 10)).toBe(5);
  });

  it("limita los valores por debajo y por encima", () => {
    expect(clampNumber(-3, 0, 10)).toBe(0);
    expect(clampNumber(15, 0, 10)).toBe(10);
  });
});
