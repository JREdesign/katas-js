import { describe, it, expect } from "vitest";
import { endsWithCI } from "./ends-with-ci.js";

describe("endsWithCI", () => {
  it("comprueba sufijo sin importar mayúsculas", () => {
    expect(endsWithCI("Hola Mundo", "DO")).toBe(true);
    expect(endsWithCI("Hola Mundo", "do")).toBe(true);
  });
 it("devuelve false si no coincide", () => {
    expect(endsWithCI("Hola", "ad")).toBe(false);
  });
