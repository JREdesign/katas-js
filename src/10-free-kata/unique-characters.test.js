import { describe, expect, it } from "vitest";
import {
  countUniqueCharacters,
  uniqueCharacters,
} from "./unique-characters.js";

describe("uniqueCharacters", () => {
  it("mantiene solo la primera aparición de cada carácter", () => {
    expect(uniqueCharacters("banana")).toEqual(["b", "a", "n"]);
  });

  it("cuenta los caracteres distintos", () => {
    expect(countUniqueCharacters("banana")).toBe(3);
  });

  it("maneja textos vacíos", () => {
    expect(uniqueCharacters("")).toEqual([]);
    expect(countUniqueCharacters("")).toBe(0);
  });

  it("distingue mayúsculas, espacios y caracteres Unicode", () => {
    expect(uniqueCharacters("Aa a")).toEqual(["A", "a", " "]);
    expect(countUniqueCharacters("😀😀🎉")).toBe(2);
  });

  it("rechaza entradas que no sean cadenas", () => {
    expect(() => uniqueCharacters(null)).toThrow(TypeError);
    expect(() => countUniqueCharacters(123)).toThrow(TypeError);
  });
});
