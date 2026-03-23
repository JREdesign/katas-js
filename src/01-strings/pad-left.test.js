
import { describe, it, expect } from "vitest";
import { padLeft } from "./padLeft"; // ajusta la ruta según tu proyecto

describe("padLeft", () => {
  // =========================
  // Casos básicos
  // =========================
  it("debería rellenar con espacios por defecto", () => {
    expect(padLeft("test", 6)).toBe("  test");
  });

  it("debería rellenar con un carácter personalizado", () => {
    expect(padLeft("test", 6, "0")).toBe("00test");
  });

  it("no debería modificar el string si ya tiene la longitud suficiente", () => {
    expect(padLeft("testing", 4)).toBe("testing");
  });

  it("debería manejar correctamente longitud exacta", () => {
    expect(padLeft("test", 4)).toBe("test");
  });

  // =========================
  // Caracteres múltiples
  // =========================
  it("debería rellenar correctamente con strings de más de un carácter", () => {
    expect(padLeft("test", 10, "ab")).toBe("abababtest");
  });

  it("debería cortar el relleno si se pasa de longitud", () => {
    expect(padLeft("test", 9, "abc")).toBe("abcabtest");
  });

  // =========================
  // Edge cases
  // =========================
  it("debería funcionar con string vacío", () => {
    expect(padLeft("", 3)).toBe("   ");
  });

  it("debería devolver string vacío si length es 0", () => {
    expect(padLeft("", 0)).toBe("");
  });
// =========================
  // Errores
  // =========================
  it("debería lanzar error si input no es string", () => {
    expect(() => padLeft(123, 5)).toThrow(TypeError);
  });

  it("debería lanzar error si length no es entero", () => {
    expect(() => padLeft("test", 2.5)).toThrow(TypeError);
  });

  it("debería lanzar error si length es negativo", () => {
    expect(() => padLeft("test", -1)).toThrow(TypeError);
  });

  it("debería lanzar error si char es string vacío", () => {
    expect(() => padLeft("test", 6, "")).toThrow(TypeError);
  });
});
  
