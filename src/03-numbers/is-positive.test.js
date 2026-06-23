import { describe, expect, it } from "vitest";
import { isPositive } from "./is-positive.js";

describe("isPositive", () => {
  it("devuelve true para números positivos", () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(10.5)).toBe(true);
  });
