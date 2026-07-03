import { describe, expect, it } from "vitest";
import { normalizeWhitespace } from "./normalize-whitespace.js";

describe("normalizeWhitespace", () => {
  it("sustituye varios espacios por uno solo", () => {
    expect(normalizeWhitespace("hola    mundo")).toBe("hola mundo");
  });
