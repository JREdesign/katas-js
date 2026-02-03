import { describe, it, expect, vi } from "vitest";
import { randomInt } from "./random-int.js";

describe("randomInt", () => {
  it("incluye extremos (mock de Math.random)", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    expect(randomInt(5, 10)).toBe(5);
    
