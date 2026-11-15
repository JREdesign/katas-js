import { describe, expect, it } from "vitest";
import { reverseWords, countWords } from "./reverse-words.js";

describe("reverseWords", () => {
  it("invierte el orden de las palabras", () => {
    expect(reverseWords("Hola mundo JavaScript")).toBe("JavaScript mundo Hola");
  });

  it("normaliza espacios repetidos, saltos de línea y tabulaciones", () => {
    expect(reverseWords("  uno   dos\t tres\n")).toBe("tres dos uno");
  });

  it("admite una sola palabra y cadenas vacías", () => {
    expect(reverseWords("hola")).toBe("hola");
    expect(reverseWords("")).toBe("");
    expect(reverseWords(" \n\t ")).toBe("");
  });

  it("rechaza argumentos que no sean cadenas de texto", () => {
    expect(() => reverseWords(null)).toThrow(TypeError);
    expect(() => reverseWords(["hola", "mundo"])).toThrow(TypeError);
  });
});
