import { describe, it, expect } from "vitest";
import { removeSpaces } from "./remove-spaces.js";

describe("removeSpaces", () => {
  it("elimina espacios normales", () => {
    expect(removeSpaces("hola mundo")).toBe("holamundo");
  });
  it("elimina múltiples espacios y saltos de línea", () => {
    expect(removeSpaces(" hola   mundo\njs ")).toBe("holamundojs");
  });
  it("devuelve el mismo string si no hay espacios", () => {
    expect(removeSpaces("abc")).toBe("abc");
  });
