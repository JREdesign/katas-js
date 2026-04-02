import { describe, it, expect } from "vitest";
import { toPercent } from "./to-percent.js";

describe("toPercent", () => {
  it("convierte a porcentaje", () => {
    expect(toPercent(0.5)).toBe(50);
    expect(toPercent(0.1234, 2)).toBe(12.34);
  });
  it("redondea según decimales", () => {
    expect(toPercent(0.1299, 1)).toBe(13);
  });
