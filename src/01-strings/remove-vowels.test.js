import { describe, it, expect } from "vitest";
import { removeVowels } from "./remove-vowels.js";

describe("removeVowels", () => {
  it("elimina vocales de un texto", () => {
    expect(removeVowels("hola mundo")).toBe("hl mnd");
  });
  it("elimina vocales con tilde", () => {
    expect(removeVowels("camión aéreo")).toBe("cmn r");
  });
