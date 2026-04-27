import { describe, it, expect } from "vitest";
import { lastItem } from "./last-item.js";

describe("lastItem", () => {
  it("devuelve el último elemento", () => {
    expect(lastItem([1, 2, 3])).toBe(3);
    expect(lastItem(["a", "b"])).toBe("b");
  });

  it("devuelve undefined si está vacío", () => {
    expect(lastItem([])).toBe(undefined);
  });
