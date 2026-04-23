import { describe, it, expect } from "vitest";
import { countChar } from "./count-char.js";

describe("countChar", () => {
  it("cuenta ocurrencias de un carácter", () => {
    expect(countChar("banana", "a")).toBe(3);
    expect(countChar("banana", "b")).toBe(1);
  });
  it("devuelve 0 si no aparece", () => {
    expect(countChar("hola", "z")).toBe(0);
  });
