import { describe, it, expect } from "vitest";
import { repeatString } from "./repeat-string.js";

describe("repeatString", () => {
  it("repite", () => {
    expect(repeatString("a", 3)).toBe("aaa");
  });
