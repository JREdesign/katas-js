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

describe("clampNumbers", () => {
  it("limita todos los números sin modificar el array original", () => {
    const numbers = [-4, 3, 15];
    expect(clampNumbers(numbers, 0, 10)).toEqual([0, 3, 10]);
    expect(numbers).toEqual([-4, 3, 15]);
  });

  it("maneja arrays vacíos", () => {
    expect(clampNumbers([], 0, 10)).toEqual([]);
  });

  it("rechaza datos inválidos", () => {
    expect(() => clampNumbers("1,2", 0, 10)).toThrow(TypeError);
    expect(() => clampNumbers([1, NaN], 0, 10)).toThrow(TypeError);
    expect(() => clampNumbers([1], 10, 0)).toThrow(RangeError);
  });
});

describe("validación de límites", () => {
  it("rechaza números no finitos y límites invertidos", () => {
    expect(() => clampNumber(Infinity, 0, 10)).toThrow(TypeError);
    expect(() => clampNumber(5, 10, 0)).toThrow(RangeError);
    expect(() => isWithinRange(NaN, 0, 10)).toThrow(TypeError);
  });
});
