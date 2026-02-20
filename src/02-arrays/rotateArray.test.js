import { describe, it, expect } from "vitest";
import { rotateArray } from "./rotateArray";

describe("rotateArray", () => {
  it("rota un array hacia la derecha", () => {
    expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
  });

  it("rota varias posiciones", () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  it("no rota si k = 0", () => {
    expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  
