import { describe, it, expect } from "vitest";
import { safeGet } from "./safeGet";

describe("safeGet", () => {
  it("devuelve el valor de la propiedad si la clave existe", () => {
    const obj = { nombre: "Jorge", edad: 30 };

    expect(safeGet(obj, "nombre")).toBe("Jorge");
    expect(safeGet(obj, "edad")).toBe(30);
  });


