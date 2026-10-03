import { describe, expect, it } from "vitest";
import {
  boundedSum,
  boundedSumDetails,
} from "./bounded-sum.js";

describe("boundedSum", () => {
  it("suma valores hasta alcanzar el límite", () => {
    expect(boundedSum([2, 3, 4, 1], 6)).toBe(5);
  });

  it("devuelve los detalles de los valores utilizados", () => {
    expect(boundedSumDetails([2, 3, 4, 1], 6)).toEqual({
      total: 5,
      used: [2, 3],
      count: 2,
    });
  });
});
