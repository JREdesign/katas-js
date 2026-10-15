import { describe, expect, it } from "vitest";
import { rangeIntersection, rangesOverlap } from "./range-overlap.js";

describe("range overlap", () => {
  it("detecta intervalos que se solapan", () => {
    expect(rangesOverlap([1, 5], [3, 7])).toBe(true);
    expect(rangesOverlap([1, 2], [4, 6])).toBe(false);
  });

  it("calcula la intersección de dos intervalos", () => {
    expect(rangeIntersection([1, 5], [3, 7])).toEqual([3, 5]);
    expect(rangeIntersection([1, 2], [4, 6])).toBeNull();
  });
});
