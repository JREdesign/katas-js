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
it("devuelve el mismo objeto", () => {
    const obj = { a: 1 };
    expect(deepFreeze(obj)).toBe(obj);
  });

  it("lanza error si no es objeto", () => {
    expect(() => deepFreeze(null)).toThrow(TypeError);
    expect(() => deepFreeze(123)).toThrow(TypeError);
  });
});
