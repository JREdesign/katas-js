import { describe, expect, it } from "vitest";
import { titleCase } from "./title-case.js";

describe("titleCase", () => {
  it("capitaliza la primera letra de cada palabra", () => {
    expect(titleCase("hola mundo")).toBe("Hola Mundo");
  });
  it("normaliza mayúsculas y minúsculas", () => {
    expect(titleCase("hOLA mUNDO")).toBe("Hola Mundo");
  });
  it("normaliza espacios adicionales", () => {
    expect(titleCase("  hola   mundo  ")).toBe("Hola Mundo");
  });
  it("devuelve un string vacío si no hay contenido", () => {
    expect(titleCase("")).toBe("");
    expect(titleCase("   ")).toBe("");
  });


