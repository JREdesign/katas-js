import { describe, expect, it } from "vitest";
import { swapItems, swapAdjacent } from "./swap-items.js";

describe("swapItems", () => {
  it("intercambia dos elementos del array", () => {
    expect(swapItems(["a", "b", "c"], 0, 2)).toEqual(["c", "b", "a"]);
  });

  it("mantiene el original sin modificaciones", () => {
    const original = [10, 20, 30];
    const result = swapItems(original, 0, 1);

    expect(result).toEqual([20, 10, 30]);
    expect(original).toEqual([10, 20, 30]);
    expect(result).not.toBe(original);
  });

  it("devuelve una copia cuando los índices coinciden", () => {
    const original = [1, 2];
    const result = swapItems(original, 1, 1);

    expect(result).toEqual(original);
    expect(result).not.toBe(original);
  });

  it("rechaza entradas inválidas e índices fuera de rango", () => {
    expect(() => swapItems("abc", 0, 1)).toThrow(TypeError);
    expect(() => swapItems([], 0, 0)).toThrow(RangeError);
    expect(() => swapItems([1, 2], -1, 1)).toThrow(RangeError);
    expect(() => swapItems([1, 2], 0, 2)).toThrow(RangeError);
    expect(() => swapItems([1, 2], 0.5, 1)).toThrow(RangeError);
  });
});

describe("swapItems: casos adicionales", () => {
  it("intercambia valores repetidos sin alterar otras posiciones", () => {
    expect(swapItems([1, 2, 1, 3], 1, 3)).toEqual([1, 3, 1, 2]);
  });

  it("conserva las referencias de objetos y no modifica sus datos", () => {
    const first = { id: 1 };
    const second = { id: 2 };
    const original = [first, second];
    const result = swapItems(original, 0, 1);

    expect(result[0]).toBe(second);
    expect(result[1]).toBe(first);
    expect(original).toEqual([first, second]);
  });

  it("dos intercambios de los mismos índices restauran el contenido", () => {
    const original = ["uno", "dos", "tres"];
    const swapped = swapItems(original, 0, 2);
    expect(swapItems(swapped, 0, 2)).toEqual(original);
    expect(original).toEqual(["uno", "dos", "tres"]);
  });
});

describe("swapItems: validación exhaustiva de índices", () => {
  it.each([
    [NaN, 0],
    [Infinity, 0],
    [0, -Infinity],
    [0, 1.5],
    [undefined, 0],
    [0, "1"],
    [2, 0],
    [0, -1],
  ])("rechaza los índices %s y %s", (firstIndex, secondIndex) => {
    expect(() => swapItems(["a", "b"], firstIndex, secondIndex)).toThrow(
      RangeError
    );
  });

  it.each([null, undefined, 23, {}, "texto"])(
    "rechaza el valor no-array %s",
    (value) => {
      expect(() => swapItems(value, 0, 0)).toThrow(TypeError);
    }
  );

  it("admite un array de un elemento sin mutarlo", () => {
    const original = ["único"];
    const result = swapItems(original, 0, 0);
    expect(result).toEqual(["único"]);
    expect(result).not.toBe(original);
  });
});

describe("swapAdjacent", () => {
  it("intercambia un elemento con su siguiente", () => {
    expect(swapAdjacent(["a", "b", "c"], 1)).toEqual(["a", "c", "b"]);
    expect(swapAdjacent([1, 2], 0)).toEqual([2, 1]);
  });

  it("no modifica el array original", () => {
    const original = [10, 20, 30];
    const result = swapAdjacent(original, 0);
    expect(result).toEqual([20, 10, 30]);
    expect(original).toEqual([10, 20, 30]);
    expect(result).not.toBe(original);
  });

  it("rechaza índices sin elemento siguiente", () => {
    expect(() => swapAdjacent([1, 2], 1)).toThrow(RangeError);
    expect(() => swapAdjacent([], 0)).toThrow(RangeError);
    expect(() => swapAdjacent([1, 2], -1)).toThrow(RangeError);
    expect(() => swapAdjacent([1, 2], 0.5)).toThrow(RangeError);
  });

  it("rechaza valores que no sean arrays", () => {
    expect(() => swapAdjacent(null, 0)).toThrow(TypeError);
  });
});
