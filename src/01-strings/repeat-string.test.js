import { describe, it, expect } from "vitest";
import { repeatString } from "./repeat-string.js";

describe("repeatString", () => {
  it("repite", () => {
    expect(repeatString("a", 3)).toBe("aaa");
  });
it("0 devuelve vacío", () => {
    expect(repeatString("hola", 0)).toBe("");
  });

  it("errores", () => {
    expect(() => repeatString(1, 2)).toThrow();
    expect(() => repeatString("a", -1)).toThrow();
  });
});
