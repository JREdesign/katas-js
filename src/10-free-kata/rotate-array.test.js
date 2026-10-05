import { describe, expect, it } from "vitest";
import {
  rotateArray,
  rotateArrayDetails,
} from "./rotate-array.js";

describe("rotateArray", () => {
  it("rota un array hacia la derecha", () => {
    expect(rotateArray([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
    expect(rotateArray([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
  });

  it("devuelve metadatos de la rotación", () => {
    expect(rotateArrayDetails(["a", "b", "c"], 1)).toEqual({
      rotated: ["c", "a", "b"],
      offset: 1,
      changed: true,
    });
  });
});
