import { describe, it, expect } from "vitest";
import { compactArray } from "./compact-array.js";

describe("compactArray", () => {
  it("elimina valores falsy", () => {
    expect(compactArray([0, 1, false, 2, "", 3, null, undefined, NaN])).toEqual([1, 2, 3]);
  });

  it("elimina strings vacíos", () => {
    expect(compactArray(["a", "", "b"])).toEqual(["a", "b"]);
