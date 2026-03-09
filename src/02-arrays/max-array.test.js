import { describe, it, expect } from "vitest";
import { maxArray } from "./max-array.js";

describe("maxArray", () => {

  describe("casos válidos", () => {

    it("devuelve el número mayor de un array de enteros", () => {
      expect(maxArray([1, 5, 3, 9, 2])).toBe(9);
    });

    it("funciona con números negativos", () => {
      expect(maxArray([-10, -3, -25, -1])).toBe(-1);
    });
    it("funciona con números decimales", () => {
      expect(maxArray([1.5, 2.7, 2.71, 0.3])).toBe(2.71);
    });

    it("devuelve el único elemento si el array tiene uno solo", () => {
      expect(maxArray([42])).toBe(42);
    });

    it("funciona cuando el máximo está al principio", () => {
      expect(maxArray([99, 4, 8, 12])).toBe(99);
    });

    it("funciona cuando el máximo está al final", () => {
      expect(maxArray([4, 8, 12, 99])).toBe(99);
    });

    it("funciona con valores repetidos", () => {
      expect(maxArray([7, 7, 7, 7])).toBe(7);
    });

    it("acepta Infinity como número válido", () => {
      expect(maxArray([1, 2, Infinity, 4])).toBe(Infinity);
    });

    it("funciona con -Infinity cuando hay números mayores", () => {
      expect(maxArray([-Infinity, -10, -3, -20])).toBe(-3);
    });

  });
describe("errores de entrada", () => {

    it("lanza TypeError si el argumento no es un array", () => {
      expect(() => maxArray("no soy un array")).toThrow(TypeError);
      expect(() => maxArray("no soy un array")).toThrow(
        "maxArray: 'arr' debe ser un array"
      );
    });

    it("lanza RangeError si el array está vacío", () => {
      expect(() => maxArray([])).toThrow(RangeError);
      expect(() => maxArray([])).toThrow(
        "maxArray: el array no puede estar vacío"
      );
    });

    it("lanza TypeError si el primer elemento no es un número válido", () => {
      expect(() => maxArray([NaN, 1, 2, 3])).toThrow(TypeError);
      expect(() => maxArray([NaN, 1, 2, 3])).toThrow(
        "maxArray: todos los elementos deben ser números válidos"
      );
    });

    it("lanza TypeError si algún elemento no es número", () => {
      expect(() => maxArray([1, 2, "3", 4])).toThrow(TypeError);
      expect(() => maxArray([1, 2, "3", 4])).toThrow(
        "maxArray: todos los elementos deben ser números válidos"
      );
    });

    it("lanza TypeError si algún elemento es NaN", () => {
      expect(() => maxArray([1, 2, NaN, 4])).toThrow(TypeError);
      expect(() => maxArray([1, 2, NaN, 4])).toThrow(
        "maxArray: todos los elementos deben ser números válidos"
      );
    });

  });

});

describe("errores de entrada", () => {

    it("lanza TypeError si el argumento no es un array", () => {
      expect(() => maxArray("no soy un array")).toThrow(TypeError);
      expect(() => maxArray("no soy un array")).toThrow(
        "maxArray: 'arr' debe ser un array"
      );
    });

    it("lanza RangeError si el array está vacío", () => {
      expect(() => maxArray([])).toThrow(RangeError);
      expect(() => maxArray([])).toThrow(
        "maxArray: el array no puede estar vacío"
      );
    });

    it("lanza TypeError si el primer elemento no es un número válido", () => {
      expect(() => maxArray([NaN, 1, 2, 3])).toThrow(TypeError);
      expect(() => maxArray([NaN, 1, 2, 3])).toThrow(
        "maxArray: todos los elementos deben ser números válidos"
      );
    });

    it("lanza TypeError si algún elemento no es número", () => {
      expect(() => maxArray([1, 2, "3", 4])).toThrow(TypeError);
      expect(() => maxArray([1, 2, "3", 4])).toThrow(
        "maxArray: todos los elementos deben ser números válidos"
      );
    });

    it("lanza TypeError si algún elemento es NaN", () => {
      expect(() => maxArray([1, 2, NaN, 4])).toThrow(TypeError);
      expect(() => maxArray([1, 2, NaN, 4])).toThrow(
        "maxArray: todos los elementos deben ser números válidos"
      );
    });

  });

});
