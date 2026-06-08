import { describe, it, expect } from "vitest";
import { drop } from "./drop.js";

describe("drop", () => {
  it("elimina el primer elemento por defecto", () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
  it("elimina count elementos", () => {
    expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });
