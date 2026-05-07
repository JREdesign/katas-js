import { describe, it, expect } from "vitest";
import { firstItem } from "./first-item.js";

describe("firstItem", () => {
  it("devuelve el primer elemento", () => {
    expect(firstItem([1, 2, 3])).toBe(1);
    expect(firstItem(["a", "b"])).toBe("a");
  });
  it("devuelve undefined si está vacío", () => {
    expect(firstItem([])).toBe(undefined);
  });
