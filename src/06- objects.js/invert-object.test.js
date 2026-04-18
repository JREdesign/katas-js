import { describe, it, expect } from "vitest";
import { invertObject } from "./invert-object.js";

describe("invertObject", () => {
  it("invierte claves y valores", () => {
    expect(invertObject({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  });

  it("si hay valores duplicados, prevalece la última clave", () => {
    expect(invertObject({ a: 1, b: 1 })).toEqual({ "1": "b" });
  });

  it("convierte valores a string para usarlos como clave", () => {
    expect(invertObject({ a: true, b: false })).toEqual({ "true": "a", "false": "b" });
  });
  
  it("lanza error con inputs inválidos", () => {
    expect(() => invertObject(null)).toThrow();
    expect(() => invertObject([1, 2])).toThrow();
  });
});
