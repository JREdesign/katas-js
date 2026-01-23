// KATAS-JS/src/06-objects/deep-freeze.test.js
import { describe, it, expect } from "vitest";
import { deepFreeze } from "./deep-freeze.js";

describe("deepFreeze", () => {
  it("congela recursivamente objetos anidados", () => {
    const obj = { a: { b: { c: 1 } } };
    deepFreeze(obj);

    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.a)).toBe(true);
    expect(Object.isFrozen(obj.a.b)).toBe(true);
  });
