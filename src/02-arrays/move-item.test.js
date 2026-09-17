import { describe, expect, it } from "vitest";
import { moveItem } from "./move-item.js";

describe("moveItem", () => {
  it("mueve un elemento hacia delante", () => {
    expect(moveItem(["a", "b", "c"], 0, 2)).toEqual([
      "b",
      "c",
      "a"
    ]);
  });

  it("mueve un elemento hacia atrás", () => {
    expect(moveItem(["a", "b", "c"], 2, 0)).toEqual([
      "c",
      "a",
      "b"
    ]);
  });
  
  it("mantiene el array si los índices son iguales", () => {
    expect(moveItem([1, 2, 3], 1, 1)).toEqual([1, 2, 3]);
  });

  it("no modifica el array original", () => {
    const original = [1, 2, 3];

    moveItem(original, 0, 2);

    expect(original).toEqual([1, 2, 3]);
  });

    it("lanza error si un índice está fuera de rango", () => {
    expect(() => moveItem([1, 2], 3, 0)).toThrow(RangeError);
    expect(() => moveItem([1, 2], 0, -1)).toThrow(RangeError);
  });

    it("lanza error con argumentos inválidos", () => {
    expect(() => moveItem("no", 0, 1)).toThrow(TypeError);
    expect(() => moveItem([1, 2], 0.5, 1)).toThrow(TypeError);
  });
});
