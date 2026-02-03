import { describe, it, expect, vi } from "vitest";
import { randomInt } from "./random-int.js";

describe("randomInt", () => {
  it("incluye extremos (mock de Math.random)", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    expect(randomInt(5, 10)).toBe(5);

    Math.random.mockReturnValue(0.9999999);
    expect(randomInt(5, 10)).toBe(10);

    Math.random.mockRestore();
  });

  it("lanza error si min > max", () => {
    expect(() => randomInt(10, 5)).toThrow(RangeError);
  });

  it("lanza error si no son enteros", () => {
    expect(() => randomInt(1.2, 3)).toThrow(TypeError);
  });
});
