import { describe, it, expect } from "vitest";
import { objectSize } from "./object-size.js";

describe("objectSize", () => {
  it("cuenta claves propias enumerables", () => {
    expect(objectSize({ a: 1, b: 2 })).toBe(2);
  });
