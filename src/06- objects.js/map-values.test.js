import { describe, it, expect } from "vitest";
import { mapValues } from "./map-values.js";

describe("mapValues", () => {
  it("transforma los valores manteniendo claves", () => {
    expect(mapValues({ a: 1, b: 2 }, n => n * 2)).toEqual({ a: 2, b: 4 });
  });
  it("recibe también la clave", () => {
    expect(mapValues({ a: 1 }, (value, key) => `${key}:${value}`)).toEqual({ a: "a:1" });
  });
  it("lanza error con inputs inválidos", () => {
    expect(() => mapValues(null, x => x)).toThrow();
    expect(() => mapValues([], x => x)).toThrow();
    expect(() => mapValues({ a: 1 }, 123)).toThrow();
  });
