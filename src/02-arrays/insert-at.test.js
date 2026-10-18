import { describe, expect, it } from "vitest";
import { insertAt, insertManyAt } from "./insert-at.js";

describe("insertAt", () => {
  it("inserta un elemento al principio, en medio y al final", () => {
    expect(insertAt([1, 3], 0, 0)).toEqual([0, 1, 3]);
    expect(insertAt([1, 3], 1, 2)).toEqual([1, 2, 3]);
    expect(insertAt([1, 2], 2, 3)).toEqual([1, 2, 3]);
  });

  it("no modifica el array original", () => {
    const numbers = [1, 3];
    expect(insertAt(numbers, 1, 2)).toEqual([1, 2, 3]);
    expect(numbers).toEqual([1, 3]);
  });
});
