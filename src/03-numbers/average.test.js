import { describe, it, expect } from "vitest";
import { average } from "./average.js";

describe("average", () => {
  it("calcula la media", () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([10, 20])).toBe(15);
  });
it("lanza error si está vacío", () => {
    expect(() => average([])).toThrow();
  });

  it("lanza error si hay elementos no válidos", () => {
    expect(() => average([1, "2"])).toThrow();
    expect(() => average([1, NaN])).toThrow();
  });
