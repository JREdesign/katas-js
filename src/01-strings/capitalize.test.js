import { describe, it, expect } from "vitest";
import { capitalize } from "./capitalize.js";

describe("capitalize", () => {
  it("capitaliza una palabra", () => {
    expect(capitalize("hola")).toBe("Hola");
  });

  it("devuelve vacío si input vacío", () => {
    expect(capitalize("")).toBe("");
  });


