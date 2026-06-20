import { describe, expect, it } from "vitest";
import { take } from "./take.js";

describe("take", () => {
  it("devuelve el primer elemento por defecto", () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });
