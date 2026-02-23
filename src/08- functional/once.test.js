import { describe, it, expect, vi } from "vitest";
import { once } from "./once.js";

describe("once", () => {
  it("solo ejecuta una vez", () => {
    const fn = vi.fn(x => x + 1);
    const o = once(fn);

    expect(o(1)).toBe(2);
    expect(o(10)).toBe(2);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("error si no es función", () => {
    expect(() => once(1)).toThrow();
  });
});
