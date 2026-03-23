
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
