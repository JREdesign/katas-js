import { describe, it, expect } from "vitest";
import { normalizeWhitespace } from "./normalize-whitespace.js";

describe("normalizeWhitespace", () => {
  it("elimina espacios de inicio y fin", () => {
    expect(normalizeWhitespace("   hola mundo   ")).toBe("hola mundo");
  });

  it("colapsa múltiples espacios en uno", () => {
    expect(normalizeWhitespace("hola     mundo   js")).toBe("hola mundo js");
  });

  it("colapsa saltos de línea y tabs", () => {
    expect(normalizeWhitespace("hola\n\t mundo\njs")).toBe("hola mundo js");
  });

  it("devuelve string vacío si solo hay espacios", () => {
    expect(normalizeWhitespace("   \n\t   ")).toBe("");
  });

  it("lanza error si input no es string", () => {
    expect(() => normalizeWhitespace(null)).toThrow(TypeError);
    expect(() => normalizeWhitespace(12)).toThrow(TypeError);
  });
});
