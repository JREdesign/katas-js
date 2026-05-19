import { describe, it, expect } from "vitest";
import { removeFalsy } from "./remove-falsy.js";

describe("removeFalsy", () => {
  it("elimina valores falsy", () => {
    expect(removeFalsy([0, 1, false, 2, "", 3, null, undefined, NaN])).toEqual([1, 2, 3]);
  });
  
  it("mantiene arrays y objetos vacíos porque son truthy", () => {
    expect(removeFalsy([{}, [], "ok"])).toEqual([{}, [], "ok"]);
  });
