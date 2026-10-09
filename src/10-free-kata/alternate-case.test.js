import { describe, expect, it } from "vitest";
import { alternateCase } from "./alternate-case.js";

describe("alternateCase", () => {
  it("alterna mayúsculas y minúsculas empezando por mayúscula", () => {
    expect(alternateCase("javascript")).toBe("JaVaScRiPt");
  });

  it("permite empezar por minúscula", () => {
    expect(alternateCase("javascript", false)).toBe("jAvAsCrIpT");
  });

  it("ignora espacios y signos al alternar letras", () => {
    expect(alternateCase("hola, mundo!")).toBe("HoLa, MuNdO!");
  });

  it("admite una cadena vacía", () => {
    expect(alternateCase("")).toBe("");
  });

  it("rechaza argumentos inválidos", () => {
    expect(() => alternateCase(123)).toThrow(TypeError);
    expect(() => alternateCase("hola", "sí")).toThrow(TypeError);
  });
});
