import { describe, it, expect } from "vitest";
import { removeSpaces } from "./remove-spaces.js";

describe("removeSpaces", () => {
  it("elimina espacios normales", () => {
    expect(removeSpaces("hola mundo")).toBe("holamundo");
  });
