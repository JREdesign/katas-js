import { describe, it, expect } from "vitest";
import { compactArray } from "./compact-array.js";

describe("compactArray", () => {
  it("elimina valores falsy", () => {
    expect(compactArray([0, 1, false, 2, "", 3, null, undefined, NaN])).toEqual([1, 2, 3]);
  });

  it("mantiene valores truthy", () => {
    expect(compactArray(["a", [], {}, 5])).toEqual(["a", [], {}, 5]);
  });

  it("devuelve array vacío si arr está vacío", () => {
    expect(compactArray([])).toEqual([]);
  });
