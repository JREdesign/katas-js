import { describe, expect, it } from "vitest";
import { normalizeWhitespace } from "./normalize-whitespace.js";

describe("normalizeWhitespace", () => {
  it("sustituye varios espacios por uno solo", () => {
    expect(normalizeWhitespace("hola    mundo")).toBe("hola mundo");
  });
  
  it("elimina espacios al principio y al final", () => {
    expect(normalizeWhitespace("   hola mundo   ")).toBe("hola mundo");
  });

  it("normaliza tabulaciones y saltos de línea", () => {
    expect(normalizeWhitespace("hola\tmundo\nJavaScript")).toBe(
      "hola mundo JavaScript"
    );
  });
  it("devuelve un string vacío si solo contiene espacios", () => {
    expect(normalizeWhitespace("   ")).toBe("");
  });
