import { describe, expect, it } from "vitest";
import { getInitials } from "./get-initials.js";

describe("getInitials", () => {
  it("obtiene las iniciales de un nombre", () => {
    expect(getInitials("Jorge García")).toBe("JG");
  });
  it("convierte las iniciales a mayúsculas", () => {
    expect(getInitials("ana maría lópez")).toBe("AML");
  });
  it("ignora espacios adicionales", () => {
    expect(getInitials("  Juan   Carlos  Pérez  ")).toBe("JCP");
  });

  it("devuelve un string vacío si no hay palabras", () => {
    expect(getInitials("")).toBe("");
    expect(getInitials("   ")).toBe("");
  });

  it("lanza error si no recibe un string", () => {
    expect(() => getInitials(123)).toThrow(TypeError);
    expect(() => getInitials(null)).toThrow(TypeError);
  });
});
