import { describe, expect, it } from "vitest";
import { filterObject } from "./filter-object.js";

describe("filterObject", () => {
  it("filtra propiedades según su valor", () => {
    const result = filterObject(
      { a: 1, b: 2, c: 3 },
      value => value >= 2
    );
    expect(result).toEqual({ b: 2, c: 3 });
  });

  it("permite filtrar utilizando la clave", () => {
    const result = filterObject(
      { name: "Jorge", password: "secret" },
      (_value, key) => key !== "password"
    );
    expect(result).toEqual({ name: "Jorge" });
  });
  
  it("devuelve un objeto vacío si ninguna propiedad cumple", () => {
    expect(filterObject({ a: 1 }, value => value > 10)).toEqual({});
  });

  it("lanza error con argumentos inválidos", () => {
    expect(() => filterObject(null, () => true)).toThrow(TypeError);
    expect(() => filterObject([], () => true)).toThrow(TypeError);
    expect(() => filterObject({}, "no")).toThrow(TypeError);
  });
});
