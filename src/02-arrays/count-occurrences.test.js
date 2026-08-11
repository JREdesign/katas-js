import { describe, expect, it } from "vitest";
import { countOccurrences } from "./count-occurrences.js";

describe("countOccurrences", () => {
  it("cuenta las apariciones de un número", () => {
    expect(countOccurrences([1, 2, 1, 3, 1], 1)).toBe(3);
  });
  it("cuenta las apariciones de un string", () => {
    expect(countOccurrences(["a", "b", "a"], "a")).toBe(2);
  });
  it("puede contar valores NaN", () => {
    expect(countOccurrences([NaN, 1, NaN], NaN)).toBe(2);
  });
  it("devuelve 0 si el valor no aparece", () => {
    expect(countOccurrences([1, 2, 3], 10)).toBe(0);
  });
