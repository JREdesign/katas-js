import { describe, expect, it } from "vitest";
import {
  booleanKeys,
  booleanKeysByValue,
  booleanKeysSummary,
} from "./boolean-keys.js";

describe("booleanKeys", () => {
  it("devuelve solo las claves de valores booleanos", () => {
    expect(booleanKeys({ active: true, name: "Ana", hidden: false, count: 1 }))
      .toEqual(["active", "hidden"]);
  });

  it("devuelve un array vacío si no hay booleanos", () => {
    expect(booleanKeys({ name: "Ana", count: 0 })).toEqual([]);
    expect(booleanKeys({})).toEqual([]);
  });

  it("no confunde valores equivalentes con booleanos", () => {
    expect(booleanKeys({ zero: 0, one: 1, empty: "", enabled: true }))
      .toEqual(["enabled"]);
  });

  it("rechaza entradas que no sean objetos admitidos", () => {
    expect(() => booleanKeys(null)).toThrow(TypeError);
    expect(() => booleanKeys([])).toThrow(TypeError);
    expect(() => booleanKeys("texto")).toThrow(TypeError);
  });
});

describe("booleanKeysByValue", () => {
  it("separa claves con valores true y false", () => {
    const data = { visible: true, name: "X", active: false, admin: true };
    expect(booleanKeysByValue(data, true)).toEqual(["visible", "admin"]);
    expect(booleanKeysByValue(data, false)).toEqual(["active"]);
  });

  it("valida el valor booleano solicitado", () => {
    expect(() => booleanKeysByValue({ active: true }, 1)).toThrow(TypeError);
    expect(() => booleanKeysByValue(null, true)).toThrow(TypeError);
  });
});

describe("booleanKeysSummary", () => {
  it("resume las claves booleanas", () => {
    expect(booleanKeysSummary({ a: true, b: false, c: 0, d: true }))
      .toEqual({ trueKeys: ["a", "d"], falseKeys: ["b"], total: 3 });
  });

  it("resume correctamente objetos sin booleanos", () => {
    expect(booleanKeysSummary({ a: "sí" }))
      .toEqual({ trueKeys: [], falseKeys: [], total: 0 });
  });

  it("no modifica el objeto original", () => {
    const original = { a: true, b: false };
    booleanKeysSummary(original);
    expect(original).toEqual({ a: true, b: false });
  });
});
