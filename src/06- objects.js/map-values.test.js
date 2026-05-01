import { describe, it, expect } from "vitest";
import { mapValues } from "./map-values.js";

describe("mapValues", () => {
  it("transforma los valores manteniendo claves", () => {
    expect(mapValues({ a: 1, b: 2 }, n => n * 2)).toEqual({ a: 2, b: 4 });
  });
  it("recibe también la clave", () => {
    expect(mapValues({ a: 1 }, (value, key) => `${key}:${value}`)).toEqual({ a: "a:1" });
  });
  it("lanza error con inputs inválidos", () => {
    expect(() => mapValues(null, x => x)).toThrow();
    expect(() => mapValues([], x => x)).toThrow();
    expect(() => mapValues({ a: 1 }, 123)).toThrow();
  });
  it("devuelve un objeto vacío si recibe un objeto vacío", () => {
    expect(mapValues({}, value => value)).toEqual({});
  });
  it("no modifica el objeto original", () => {
    const input = { a: 1, b: 2 };

    const result = mapValues(input, value => value * 10);

    expect(result).toEqual({ a: 10, b: 20 });
    expect(input).toEqual({ a: 1, b: 2 });
  });

  it("mantiene valores falsy transformados correctamente", () => {
    expect(
      mapValues(
        {
          zero: 0,
          empty: "",
          falseValue: false,
        },
        value => String(value)
      )
    ).toEqual({
      zero: "0",
      empty: "",
      falseValue: "false",
    });
  });

  it("permite devolver valores de distinto tipo", () => {
    expect(
      mapValues(
        {
          count: 3,
          enabled: 1,
        },
        (value, key) => ({
          key,
          value,
          isNumber: typeof value === "number",
        })
      )
    ).toEqual({
      count: {
        key: "count",
        value: 3,
        isNumber: true,
      },
      enabled: {
        key: "enabled",
        value: 1,
        isNumber: true,
      },
    });
  });

  it("solo transforma propiedades propias enumerables", () => {
    const prototype = { inherited: 100 };
    const input = Object.create(prototype);
    input.a = 1;
    input.b = 2;

    expect(mapValues(input, value => value * 2)).toEqual({
      a: 2,
      b: 4,
    });
  });
});
