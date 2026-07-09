import { describe, expect, it } from "vitest";
import { partition } from "./partition.js";

describe("partition", () => {
  it("separa los elementos según una condición", () => {
    expect(partition([1, 2, 3, 4], number => number % 2 === 0)).toEqual([
      [2, 4],
      [1, 3]
    ]);
  });
