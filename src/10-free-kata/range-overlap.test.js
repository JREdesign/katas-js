import { describe, expect, it } from "vitest";
import {
  rangeIntersection,
  rangeIntersectionLength,
  rangeIntersectionSummary,
  rangesOverlap,
} from "./range-overlap.js";

describe("range overlap", () => {
  it("detecta intervalos que se solapan", () => {
    expect(rangesOverlap([1, 5], [3, 7])).toBe(true);
    expect(rangesOverlap([1, 2], [4, 6])).toBe(false);
  });

  it("calcula la intersección de dos intervalos", () => {
    expect(rangeIntersection([1, 5], [3, 7])).toEqual([3, 5]);
    expect(rangeIntersection([1, 2], [4, 6])).toBeNull();
  });

  it("considera solapamiento cuando los extremos coinciden", () => {
    expect(rangesOverlap([1, 3], [3, 6])).toBe(true);
    expect(rangeIntersection([1, 3], [3, 6])).toEqual([3, 3]);
  });

  it("permite intervalos de un solo punto y números negativos", () => {
    expect(rangesOverlap([2, 2], [1, 4])).toBe(true);
    expect(rangeIntersection([-5, -1], [-3, 2])).toEqual([-3, -1]);
  });

  it("calcula la longitud de la intersección", () => {
    expect(rangeIntersectionLength([1, 5], [3, 7])).toBe(2);
    expect(rangeIntersectionLength([-5, -1], [-3, 2])).toBe(2);
    expect(rangeIntersectionLength([1, 3], [3, 6])).toBe(0);
    expect(rangeIntersectionLength([1, 2], [4, 6])).toBe(0);
  });

  it("resume intervalos que se solapan", () => {
    expect(rangeIntersectionSummary([1, 5], [3, 7])).toEqual({
      overlaps: true,
      intersection: [3, 5],
      length: 2,
    });
  });

  it("resume intervalos separados o que solo se tocan", () => {
    expect(rangeIntersectionSummary([1, 2], [4, 6])).toEqual({
      overlaps: false,
      intersection: null,
      length: 0,
    });
    expect(rangeIntersectionSummary([1, 3], [3, 6])).toEqual({
      overlaps: true,
      intersection: [3, 3],
      length: 0,
    });
  });

  it("rechaza intervalos inválidos", () => {
    expect(() => rangesOverlap([3, 1], [1, 5])).toThrow(TypeError);
    expect(() => rangeIntersection([1, Infinity], [2, 3])).toThrow(TypeError);
    expect(() => rangesOverlap([1], [1, 2])).toThrow(TypeError);
    expect(() => rangeIntersectionSummary([1, 2], [3, NaN])).toThrow(TypeError);
  });
});
