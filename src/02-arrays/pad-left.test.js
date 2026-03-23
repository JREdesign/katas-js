import { describe, it, expect } from "vitest";
import { padLeft } from "./pad-left.js";

describe("padLeft", () => {
  it("rellena a la izquierda con espacios por defecto", () => {
    expect(padLeft("a", 3)).toBe("  a");
  });
it("rellena con un carácter personalizado", () => {
    expect(padLeft("7", 3, "0")).toBe("007");
  });
it("si ya tiene longitud suficiente, devuelve igual", () => {
    expect(padLeft("hola", 2)).toBe("hola");
  });
it("si ya tiene longitud suficiente, devuelve igual", () => {
    expect(padLeft("hola", 2)).toBe("hola");
  });
