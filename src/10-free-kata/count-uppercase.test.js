import { describe, expect, it } from "vitest";
import { countUppercase, extractUppercase } from "./count-uppercase.js";

describe("countUppercase", () => {
  it("cuenta las letras mayúsculas de una cadena", () => {
    expect(countUppercase("Hola MUNDO")).toBe(6);
    expect(countUppercase("ABC123")).toBe(3);
    expect(countUppercase("javascript")).toBe(0);
  });

  it("reconoce mayúsculas con tilde y la letra Ñ", () => {
    expect(countUppercase("ÁRBOL y ÑANDÚ")).toBe(10);
    expect(countUppercase("Éxito")).toBe(1);
  });

  it("ignora números, espacios, signos y símbolos", () => {
    expect(countUppercase("123 !? -_")).toBe(0);
    expect(countUppercase("A1 B2!")).toBe(2);
  });

  it("admite cadenas vacías y rechaza entradas inválidas", () => {
    expect(countUppercase("")).toBe(0);
    expect(() => countUppercase(null)).toThrow(TypeError);
  });
});

describe("extractUppercase", () => {
  it("extrae las mayúsculas conservando su orden", () => {
    expect(extractUppercase("Hola MUNDO")).toBe("HMUNDO");
    expect(extractUppercase("Árbol y Ñandú")).toBe("ÁÑ");
  });

  it("ignora números y símbolos y admite cadenas vacías", () => {
    expect(extractUppercase("a1!B2")).toBe("B");
    expect(extractUppercase("")).toBe("");
    expect(extractUppercase("abc")).toBe("");
    expect(() => extractUppercase(42)).toThrow(TypeError);
  });
});
