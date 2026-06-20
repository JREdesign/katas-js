import { describe, expect, it } from "vitest";
import { take } from "./take.js";

describe("take", () => {
  it("devuelve el primer elemento por defecto", () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });
  it("devuelve la cantidad indicada de elementos", () => {
    expect(take([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
  });
  it("devuelve todo el array si count es mayor que su longitud", () => {
    expect(take([1, 2], 10)).toEqual([1, 2]);
  });
  it("devuelve un array vacío si count es 0", () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });
  it("lanza error con argumentos inválidos", () => {
    expect(() => take("no")).toThrow(TypeError);
    expect(() => take([], -1)).toThrow(TypeError);
    expect(() => take([], 1.5)).toThrow(TypeError);
  });
});
