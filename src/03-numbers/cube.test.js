import { describe, it, expect } from "vitest";
import { cube } from "./cube.js";

describe("cube", () => {
  it("calcula el cubo de números positivos", () => {
    expect(cube(2)).toBe(8);
    expect(cube(3)).toBe(27);
  });
