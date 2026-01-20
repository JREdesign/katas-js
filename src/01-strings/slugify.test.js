// KATAS-JS/src/01-strings/slugify.test.js
import { describe, it, expect } from "vitest";
import { slugify } from "./slugify.js";

describe("slugify", () => {
  it("convierte texto a slug básico", () => {
    expect(slugify("Hola Mundo")).toBe("hola-mundo");
  });

  it("elimina tildes y signos", () => {
    expect(slugify("Árbol, acción y razón!")).toBe("arbol-accion-y-razon");
  });

  it("colapsa separadores", () => {
    expect(slugify("a   b---c")).toBe("a-b-c");
  });

  it("recorta guiones al inicio y fin", () => {
    expect(slugify("  ---Hola---  ")).toBe("hola");
  });

  it("lanza error si no es string", () => {
    expect(() => slugify(123)).toThrow(TypeError);
  });
});
