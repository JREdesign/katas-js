import { describe, it, expect } from "vitest";
import { flattenOneLevel } from "./flatten-one-level.js";

describe("flattenOneLevel", () => {
  it("aplana un nivel", () => {
    expect(flattenOneLevel([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  it("no aplana niveles más profundos", () => {
    expect(flattenOneLevel([1, [2, [3]], 4])).toEqual([1, 2, [3], 4]);
  });

  it("lanza error si no es array", () => {
    expect(() => flattenOneLevel("no")).toThrow(TypeError);
  });
});
