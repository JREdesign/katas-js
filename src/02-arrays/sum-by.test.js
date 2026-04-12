import { describe, it, expect } from "vitest";
import { sumBy } from "./sum-by.js";

describe("sumBy", () => {
  it("suma valores calculados", () => {
    const items = [{ n: 2 }, { n: 3 }, { n: 5 }];
    expect(sumBy(items, item => item.n)).toBe(10);
  });
