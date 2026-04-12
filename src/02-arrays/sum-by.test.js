import { describe, it, expect } from "vitest";
import { sumBy } from "./sum-by.js";

describe("sumBy", () => {
  it("suma valores calculados", () => {
    const items = [{ n: 2 }, { n: 3 }, { n: 5 }];
    expect(sumBy(items, item => item.n)).toBe(10);
  });
  it("devuelve 0 si el array está vacío", () => {
    expect(sumBy([], x => x)).toBe(0);
  });
  it("lanza error si fn no devuelve números válidos", () => {
    expect(() => sumBy([{ a: 1 }], item => item.missing)).toThrow();
    expect(() => sumBy([1], () => NaN)).toThrow();
  });
