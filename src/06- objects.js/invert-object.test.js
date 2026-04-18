import { describe, it, expect } from "vitest";
import { invertObject } from "./invert-object.js";

describe("invertObject", () => {
  it("invierte claves y valores", () => {
    expect(invertObject({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  });

