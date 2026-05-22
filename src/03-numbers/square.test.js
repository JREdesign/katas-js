import { describe, it, expect } from "vitest";
import { square } from "./square.js";

describe("square", () => {
  it("calcula el cuadrado de números positivos", () => {
    expect(square(2)).toBe(4);
    expect(square(5)).toBe(25);
  });
