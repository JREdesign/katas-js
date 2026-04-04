import { describe, it, expect } from "vitest";
import { safeGet } from "./safeGet";

describe("safeGet", () => {
  it("devuelve el valor de la propiedad si la clave existe", () => {
    const obj = { nombre: "Jorge", edad: 30 };

    expect(safeGet(obj, "nombre")).toBe("Jorge");
    expect(safeGet(obj, "edad")).toBe(30);
  });
  it("devuelve el valor por defecto si la clave no existe o si obj no es un objeto válido", () => {
    const obj = { nombre: "Jorge" };

    expect(safeGet(obj, "apellido", "Desconocido")).toBe("Desconocido");
    expect(safeGet(null, "nombre", "Sin valor")).toBe("Sin valor");
    expect(safeGet(123, "nombre", "Sin valor")).toBe("Sin valor");
  });
});

