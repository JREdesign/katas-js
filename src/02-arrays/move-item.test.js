import { describe, expect, it } from "vitest";
import { moveItem } from "./move-item.js";

describe("moveItem", () => {
  it("mueve un elemento hacia delante", () => {
    expect(moveItem(["a", "b", "c"], 0, 2)).toEqual([
      "b",
      "c",
      "a"
    ]);
  });
