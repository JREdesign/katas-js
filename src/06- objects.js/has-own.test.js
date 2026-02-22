import { describe, it, expect } from "vitest";
import { hasOwn } from "./hasOwn";

describe("hasOwn", () => {
  it("devuelve true cuando el objeto tiene la propiedad propia", () => {
    const obj = { nombre: "Jorge", edad: 30 };

    const resultado = hasOwn(obj, "nombre");

    expect(resultado).toBe(true);
  });

  it("devuelve false cuando la propiedad no existe en el objeto", () => {
    const obj = { nombre: "Jorge" };

    const resultado = hasOwn(obj, "edad");

    expect(resultado).toBe(false);
  });

  it("lanza TypeError cuando los argumentos no son válidos", () => {
    expect(() => hasOwn(null, "prop")).toThrow(TypeError);
    expect(() => hasOwn(123, "prop")).toThrow(TypeError);
    expect(() => hasOwn({}, 123)).toThrow(TypeError);
  });
});
