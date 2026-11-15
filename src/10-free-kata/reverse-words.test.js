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

describe("countWords", () => {
  it("cuenta las palabras de una cadena", () => {
    expect(countWords("Hola mundo JavaScript")).toBe(3);
    expect(countWords("una")).toBe(1);
  });

  it("ignora espacios repetidos, saltos de línea y tabulaciones", () => {
    expect(countWords("  uno   dos\t tres\n")).toBe(3);
  });

  it("devuelve cero en cadenas vacías o compuestas solo por espacios", () => {
    expect(countWords("")).toBe(0);
    expect(countWords(" \n\t ")).toBe(0);
  });

  it("rechaza argumentos que no sean cadenas de texto", () => {
    expect(() => countWords(undefined)).toThrow(TypeError);
    expect(() => countWords(42)).toThrow(TypeError);
  });
});
