import { describe, it, expect } from "vitest";
import { countWords } from "./count-words.js";

describe("countWords", () => {
  it("cuenta palabras básicas", () => {
    expect(countWords("hola mundo")).toBe(2);
  });

  it("ignora espacios extra", () => {
    expect(countWords("  hola   mundo  ")).toBe(2);
  });

  it("devuelve 0 si está vacío o solo espacios", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   ")).toBe(0);
  });

  it("lanza error si no es string", () => {
    expect(() => countWords(123)).toThrow(TypeError);
  
