import { describe, expect, it } from "vitest";
import { countOccurrences } from "./count-occurrences.js";

describe("countOccurrences", () => {
  it("cuenta las apariciones de un número", () => {
    expect(countOccurrences([1, 2, 1, 3, 1], 1)).toBe(3);
  });
