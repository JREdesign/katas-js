import { describe, expect, it } from "vitest";
import { fromPairs } from "./from-pairs.js";

describe("fromPairs", () => {
  it("crea un objeto a partir de pares", () => {
    expect(
      fromPairs([
        ["name", "Jorge"],
        ["age", 30]
      ])
    ).toEqual({
      name: "Jorge",
      age: 30
    });
  });

  it("devuelve un objeto vacío si no hay pares", () => {
    expect(fromPairs([])).toEqual({});
  });

  it("la última pareja prevalece si una clave se repite", () => {
    expect(
      fromPairs([
        ["role", "user"],
        ["role", "admin"]
      ])
    ).toEqual({
      role: "admin"
    });
  });

  it("permite valores de distintos tipos", () => {
    expect(
      fromPairs([
        ["active", true],
        ["items", [1, 2]]
      ])
    ).toEqual({
      active: true,
      items: [1, 2]
    });
  });

    it("lanza error si un elemento no es una pareja válida", () => {
    expect(() => fromPairs([["a"]])).toThrow(TypeError);
    expect(() => fromPairs(["a"])).toThrow(TypeError);
  });

  it("lanza error si una clave no es un string", () => {
    expect(() => fromPairs([[1, "value"]])).toThrow(TypeError);
  });

  it("lanza error si no recibe un array", () => {
    expect(() => fromPairs(null)).toThrow(TypeError);
  });
});
