import { describe, expect, it } from "vitest";
import { countUppercase, extractUppercase, hasUppercase } from "./count-uppercase.js";

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

describe("hasUppercase", () => {
  it("detecta mayúsculas normales y acentuadas", () => {
    expect(hasUppercase("hola Mundo")).toBe(true);
    expect(hasUppercase("ñ Ñ")).toBe(true);
  });

  it("devuelve false cuando no hay mayúsculas", () => {
    expect(hasUppercase("hola 123!")).toBe(false);
    expect(hasUppercase("")).toBe(false);
  });

  it("rechaza argumentos que no sean cadenas", () => {
    expect(() => hasUppercase(null)).toThrow(TypeError);
    expect(() => hasUppercase(123)).toThrow(TypeError);
  });
});

describe("mayúsculas Unicode", () => {
  it.each([
    ["ΑβΓ", "ΑΓ"],
    ["ПрИвет", "ПИ"],
    ["𐐀𐐨", "𐐀"],
    ["A🙂É中", "AÉ"],
    ["A\u0301b", "A"],
    ["你好🙂123", ""],
  ])("procesa correctamente %s", (text, expected) => {
    expect(extractUppercase(text)).toBe(expected);
    expect(countUppercase(text)).toBe([...expected].length);
    expect(hasUppercase(text)).toBe(expected.length > 0);
  });
});

describe("coherencia entre funciones de mayúsculas", () => {
  it.each(["", "hola", "AAaBB", "  A\tB\nC  ", "Ñandú", "𐐀aÉ"])(
    "mantiene resultados coherentes para %j",
    (text) => {
      const extracted = extractUppercase(text);
      expect(countUppercase(text)).toBe([...extracted].length);
      expect(hasUppercase(text)).toBe(countUppercase(text) > 0);
      expect(extractUppercase(extracted)).toBe(extracted);
    }
  );
});
