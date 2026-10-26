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

describe("isWithinRange", () => {
  it("reconoce los valores interiores y los extremos", () => {
    expect(isWithinRange(5, 0, 10)).toBe(true);
    expect(isWithinRange(0, 0, 10)).toBe(true);
    expect(isWithinRange(10, 0, 10)).toBe(true);
  });

  it("rechaza valores fuera de los límites", () => {
    expect(isWithinRange(-1, 0, 10)).toBe(false);
    expect(isWithinRange(11, 0, 10)).toBe(false);
  });
});
