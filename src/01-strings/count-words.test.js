import { describe, it, expect } from "vitest";
import { countWords } from "./count-words.js";

describe("countWords", () => {
  it("cuenta palabras básicas", () => {
    expect(countWords("hola mundo")).toBe(2);
  });

  it("ignora espacios extra", () => {
    expect(countWords("  hola   mundo  ")).toBe(2);
  });
