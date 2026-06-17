import { describe, expect, it } from "vitest";
import { countVowels } from "./count-vowels.js";

describe("countVowels", () => {
  it("cuenta las vocales de un texto", () => {
    expect(countVowels("hola mundo")).toBe(4);
  });
  it("ignora mayúsculas y cuenta vocales con tilde", () => {
    expect(countVowels("ÁRBOL ÚNICO")).toBe(5);
  });
