import { describe, it, expect } from "vitest";
import { chunkArray } from "./chunk-array.js";

describe("chunkArray", () => {
  it("divide un array en grupos del tamaño indicado", () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("si size es mayor que el array, devuelve un único chunk", () => {
    expect(chunkArray([1, 2], 10)).toEqual([[1, 2]]);
  });

  it("lanza error si arr no es array", () => {
    expect(() => chunkArray("no", 2)).toThrow(TypeError);
  });

  it("lanza error si size no es válido", () => {
    expect(() => chunkArray([1, 2], 0)).toThrow(TypeError);
    expect(() => chunkArray([1, 2], 1.5)).toThrow(TypeError);
  });
});
