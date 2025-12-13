import { describe, it, expect } from "vitest";
import { reverseString } from "./reverse-string.js";

describe("reverseString", () => {
  it("invierte un string normal", () => {
    expect(reverseString("hola")).toBe("aloh");
  });

  it("mantiene string vacío", () => {
    expect(reverseString("")).toBe("");
  });

  it("funciona con espacios", () => {
    expect(reverseString("a b")).toBe("b a");
  });

  it("lanza error si no es string", () => {
    expect(() => reverseString(123)).toThrow(TypeError);
  });
});
