import { describe, expect, it } from "vitest";
import { partition } from "./partition.js";

describe("partition", () => {
  it("separa los elementos según una condición", () => {
    expect(partition([1, 2, 3, 4], number => number % 2 === 0)).toEqual([
      [2, 4],
      [1, 3]
    ]);
  });
  
 it("mantiene el orden original", () => {
    expect(partition([5, 2, 8, 1], number => number > 3)).toEqual([
      [5, 8],
      [2, 1]
    ]);
  });
  
  it("devuelve un grupo vacío si ningún elemento cumple", () => {
    expect(partition([1, 2], number => number > 10)).toEqual([
      [],
      [1, 2]
    ]);
  });
