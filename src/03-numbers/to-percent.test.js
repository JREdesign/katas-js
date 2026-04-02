import { describe, it, expect } from "vitest";
import { toPercent } from "./to-percent.js";

describe("toPercent", () => {
  it("convierte a porcentaje", () => {
    expect(toPercent(0.5)).toBe(50);
    expect(toPercent(0.1234, 2)).toBe(12.34);
  });
