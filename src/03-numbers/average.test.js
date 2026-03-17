import { describe, it, expect } from "vitest";
import { average } from "./average.js";

describe("average", () => {
  it("calcula la media", () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([10, 20])).toBe(15);
  });
