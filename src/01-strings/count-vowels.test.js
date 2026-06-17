import { describe, expect, it } from "vitest";
import { countVowels } from "./count-vowels.js";

describe("countVowels", () => {
  it("cuenta las vocales de un texto", () => {
    expect(countVowels("hola mundo")).toBe(4);
  });

  it("ignora mayúsculas y cuenta vocales con tilde", () => {
    expect(countVowels("ÁRBOL ÚNICO")).toBe(5);
  });

  it("devuelve 0 si no hay vocales", () => {
    expect(countVowels("rhythm")).toBe(0);
  });

  it("cuenta correctamente todas las vocales repetidas", () => {
    expect(countVowels("aeiou")).toBe(5);
    expect(countVowels("aaeeiioouu")).toBe(10);
  });

  it("funciona con cadenas vacías", () => {
    expect(countVowels("")).toBe(0);
  });

  it("ignora números y símbolos", () => {
    expect(countVowels("12345!?")).toBe(0);
    expect(countVowels("hola123@")).toBe(2);
  });

  it("cuenta vocales mezcladas con mayúsculas y minúsculas", () => {
    expect(countVowels("HoLa MuNdO")).toBe(4);
  });

  it("cuenta vocales acentuadas y diéresis", () => {
    expect(countVowels("pingüino")).toBe(4);
    expect(countVowels("camión")).toBe(3);
  });

  it("lanza error si no recibe un string", () => {
    expect(() => countVowels(123)).toThrow(TypeError);
    expect(() => countVowels(null)).toThrow(TypeError);
    expect(() => countVowels(undefined)).toThrow(TypeError);
    expect(() => countVowels({})).toThrow(TypeError);
  });
});
