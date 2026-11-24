import { describe, expect, it } from "vitest";
import { isPowerOfTwo, powerOfTwoExponent } from "./is-power-of-two.js";

describe("isPowerOfTwo", () => {
  it.each([1, 2, 4, 8, 1024, 2 ** 32, 2 ** 52])(
    "reconoce %s como potencia de dos",
    (number) => {
      expect(isPowerOfTwo(number)).toBe(true);
    }
  );

  it.each([0, -2, 3, 6, 12, 2.5, Number.MAX_SAFE_INTEGER, 2 ** 53])(
    "rechaza %s como potencia de dos dentro del dominio",
    (number) => {
      expect(isPowerOfTwo(number)).toBe(false);
    }
  );

  it.each([NaN, Infinity, -Infinity, "8", null, undefined])(
    "rechaza la entrada inválida %s",
    (value) => {
      expect(isPowerOfTwo(value)).toBe(false);
    }
  );
});

describe("powerOfTwoExponent", () => {
  it.each([
    [1, 0],
    [2, 1],
    [8, 3],
    [1024, 10],
    [2 ** 32, 32],
    [2 ** 52, 52],
  ])("devuelve el exponente de %s", (number, exponent) => {
    expect(powerOfTwoExponent(number)).toBe(exponent);
  });

  it.each([0, -2, 3, 12, 2.5, 2 ** 53, NaN, Infinity, "8", null])(
    "devuelve null para %s",
    (value) => {
      expect(powerOfTwoExponent(value)).toBeNull();
    }
  );
});
