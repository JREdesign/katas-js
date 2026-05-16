import { describe, it, expect } from "vitest";
import { removeVowels } from "./remove-vowels.js";

describe("removeVowels", () => {
  it("elimina vocales de un texto", () => {
    expect(removeVowels("hola mundo")).toBe("hl mnd");
  });
  it("elimina vocales con tilde", () => {
    expect(removeVowels("camión aéreo")).toBe("cmn r");
  });
  it("respeta consonantes, espacios y signos", () => {
    expect(removeVowels("JS!")).toBe("JS!");
  });
  it("lanza error si no es string", () => {
    expect(() => removeVowels(123)).toThrow();
  it("elimina vocales en mayúsculas", () => {
    expect(removeVowels("HOLA MUNDO")).toBe("HL MND");
  });

});
