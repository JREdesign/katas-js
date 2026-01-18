// KATAS-JS/src/03-numbers/gcd.test.js
import { describe, it, expect } from "vitest";
import { gcd } from "./gcd.js";

describe("gcd", () => {
  it("calcula el MCD", () => {
    expect(gcd(54, 24)).toBe(6);
  });

  it("maneja negativos", () => {
    expect(gcd(-54, 24)).toBe(6);
  });

  it("si uno es 0, devuelve el otro en valor absoluto", () => {
    expect(gcd(0, 10)).toBe(10);
    expect(gcd(-10, 0)).toBe(10);
  });

});
