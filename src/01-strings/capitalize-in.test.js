import { describe, it, expect } from "vitest";
import { chunkArray } from "./chunk-array.js";

describe("chunkArray", () => {
  it("divide un array en grupos del tamaño indicado", () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
