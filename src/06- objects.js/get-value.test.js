import { describe, it, expect } from "vitest";
import { getValue } from "./get-value.js";

describe("getValue", () => {
  it("devuelve el valor si la ruta existe", () => {
    const obj = { a: { b: { c: 10 } } };
    expect(getValue(obj, "a.b.c")).toBe(10);
  });

  it("devuelve defaultValue si la ruta no existe", () => {
    const obj = { a: { b: {} } };
    expect(getValue(obj, "a.b.c", 99)).toBe(99);
  });

  it("devuelve defaultValue si en mitad de la ruta no hay objeto", () => {
    const obj = { a: { b: 3 } };
    expect(getValue(obj, "a.b.c", "x")).toBe("x");
  });

  it("permite defaultValue por defecto como undefined", () => {
    const obj = { a: {} };
    expect(getValue(obj, "a.b")).toBe(undefined);
  });

  it("lanza error si obj no es objeto", () => {
    expect(() => getValue(null, "a")).toThrow(TypeError);
    expect(() => getValue(123, "a")).toThrow(TypeError);
  });

    it("lanza error si path no es string", () => {
    expect(() => getValue({ a: 1 }, ["a"])).toThrow(TypeError);
  });
});



