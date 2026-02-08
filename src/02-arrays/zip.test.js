import { describe, it, expect } from "vitest";
import { zip } from "./zip.js";

describe("zip", () => {
  it("combina dos arrays por posición", () => {
    expect(zip([1, 2, 3], ["a", "b", "c"])).toEqual([[1, "a"], [2, "b"], [3, "c"]]);
  });
