import { describe, expect, it } from "vitest";
import {
  chunkString,
  countStringChunks,
  chunkStringSummary,
} from "./chunk-string.js";

describe("chunkString", () => {
  it("divide una cadena en fragmentos del tamaño indicado", () => {
    expect(chunkString("abcdefg", 3)).toEqual(["abc", "def", "g"]);
  });

  it("cuenta correctamente los fragmentos", () => {
    expect(countStringChunks("abcdefg", 3)).toBe(3);
  });

  it("devuelve un resumen de los fragmentos", () => {
    expect(chunkStringSummary("abcdefg", 3)).toEqual({
      chunks: ["abc", "def", "g"],
      count: 3,
      lastChunk: "g",
    });
  });

  it("maneja cadenas vacías", () => {
    expect(chunkString("", 2)).toEqual([]);
    expect(countStringChunks("", 2)).toBe(0);
    expect(chunkStringSummary("", 2)).toEqual({
      chunks: [],
      count: 0,
      lastChunk: "",
    });
  });

  it("no parte caracteres Unicode representados por pares sustitutos", () => {
    expect(chunkString("😀🎉🌟", 2)).toEqual(["😀🎉", "🌟"]);
  });

  it("rechaza valores que no son cadenas", () => {
    expect(() => chunkString(null, 2)).toThrow(TypeError);
    expect(() => countStringChunks(123, 2)).toThrow(TypeError);
  });

  it("rechaza tamaños inválidos", () => {
    expect(() => chunkString("abc", 0)).toThrow(RangeError);
    expect(() => chunkString("abc", -1)).toThrow(RangeError);
    expect(() => chunkStringSummary("abc", 1.5)).toThrow(RangeError);
  });
});
