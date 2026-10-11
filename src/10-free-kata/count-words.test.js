import { describe, expect, it } from "vitest";
import { countWords, wordFrequencies } from "./count-words.js";

describe("countWords", () => {
  it("cuenta las palabras separadas por espacios", () => {
    expect(countWords("hola mundo desde JavaScript")).toBe(4);
  });

  it("cuenta palabras con espacios repetidos y saltos de línea", () => {
    expect(countWords("  hola   mundo\n otra  vez ")).toBe(4);
  });

  it("devuelve cero para un texto vacío o solo con espacios", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   \n\t  ")).toBe(0);
  });

  it("rechaza valores que no son cadenas", () => {
    expect(() => countWords(123)).toThrow(TypeError);
  });
});

describe("wordFrequencies", () => {
  it("cuenta las repeticiones sin distinguir mayúsculas", () => {
    expect(wordFrequencies("Hola mundo HOLA")).toEqual({
      hola: 2,
      mundo: 1,
    });
  });

  it("devuelve un objeto vacío sin palabras", () => {
    expect(wordFrequencies(" \n\t ")).toEqual({});
  });

  it("rechaza valores que no son cadenas", () => {
    expect(() => wordFrequencies(null)).toThrow(TypeError);
  });
});
