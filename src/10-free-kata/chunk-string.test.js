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
});
