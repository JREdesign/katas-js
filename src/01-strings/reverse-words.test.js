import { describe, it, expect } from "vitest";
import { reverseWords } from "./reverse-words.js";

describe("reverseWords", () => {
  it("invierte el orden de las palabras", () => {
    expect(reverseWords("hola mundo")).toBe("mundo hola");
  });

  it("normaliza espacios", () => {
    expect(reverseWords("  hola   mundo  ")).toBe("mundo hola");
  });

  it("si está vacío devuelve vacío", () => {
    expect(reverseWords("   ")).toBe("");
  });

  it("lanza error si no es string", () => {
    expect(() => reverseWords(123)).toThrow();
  });
});
