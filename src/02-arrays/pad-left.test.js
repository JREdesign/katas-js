import { describe, it, expect } from "vitest";
import { padLeft } from "./pad-left.js";

describe("padLeft", () => {
  it("rellena a la izquierda con espacios por defecto", () => {
    expect(padLeft("a", 3)).toBe("  a");
  });
