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

  it("funciona con caracteres unicode simples", () => {
    expect(reverseString("ñandú")).toBe("údnañ");
  });

  it("no modifica el valor original (strings son inmutables)", () => {
    const s = "abc";
    reverseString(s);
    expect(s).toBe("abc");
  });

  it("lanza error si no es string", () => {
    expect(() => reverseString(123)).toThrow(TypeError);
    expect(() => reverseString(null)).toThrow(TypeError);
    expect(() => reverseString(undefined)).toThrow(TypeError);
  });
});
