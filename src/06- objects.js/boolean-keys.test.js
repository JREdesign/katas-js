import { describe, expect, it } from "vitest";
import {
  booleanKeys,
  booleanKeysByValue,
  booleanKeysSummary,
  toggleBooleanKeys,
  countBooleanValues,
  pickBooleanProperties,
  setBooleanKey,
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

describe("toggleBooleanKeys", () => {
  it("invierte solo los valores booleanos", () => {
    expect(toggleBooleanKeys({ active: true, hidden: false, count: 1, name: "Ana" }))
      .toEqual({ active: false, hidden: true, count: 1, name: "Ana" });
  });

  it("no modifica el objeto original", () => {
    const data = { active: true, hidden: false };
    const result = toggleBooleanKeys(data);
    expect(data).toEqual({ active: true, hidden: false });
    expect(result).not.toBe(data);
  });

  it("conserva los objetos que no tienen valores booleanos", () => {
    expect(toggleBooleanKeys({ a: 0, b: "texto" })).toEqual({ a: 0, b: "texto" });
    expect(toggleBooleanKeys({})).toEqual({});
  });

  it("rechaza valores que no sean objetos admitidos", () => {
    expect(() => toggleBooleanKeys(null)).toThrow(TypeError);
    expect(() => toggleBooleanKeys([])).toThrow(TypeError);
  });
});

describe("booleanKeys con propiedades especiales", () => {
  it("ignora las propiedades heredadas y conserva el orden de las propias", () => {
    const object = Object.create({ inherited: true });
    object.first = false;
    object.text = "sí";
    object.last = true;

    expect(booleanKeys(object)).toEqual(["first", "last"]);
  });
});

describe("toggleBooleanKeys con valores anidados", () => {
  it("solo invierte booleanos de primer nivel y conserva las referencias anidadas", () => {
    const nested = { enabled: true };
    const original = { active: true, nested, disabled: false };
    const result = toggleBooleanKeys(original);

    expect(result).toEqual({ active: false, nested: { enabled: true }, disabled: true });
    expect(result.nested).toBe(nested);
    expect(original.active).toBe(true);
    expect(original.disabled).toBe(false);
  });
});

describe("countBooleanValues", () => {
  it("cuenta true y false por separado", () => {
    expect(countBooleanValues({ a: true, b: false, c: true, d: 0 }))
      .toEqual({ trueCount: 2, falseCount: 1 });
  });

  it("devuelve ceros cuando no hay booleanos y valida los argumentos", () => {
    expect(countBooleanValues({})).toEqual({ trueCount: 0, falseCount: 0 });
    expect(() => countBooleanValues(null)).toThrow(TypeError);
  });
});

describe("pickBooleanProperties", () => {
  it("extrae únicamente las propiedades booleanas propias", () => {
    const obj = Object.create({ inherited: true });
    obj.active = true;
    obj.name = "Ana";
    obj.hidden = false;
    expect(pickBooleanProperties(obj)).toEqual({ active: true, hidden: false });
  });

  it("no cambia el original y maneja objetos sin booleanos", () => {
    const obj = { count: 0 };
    expect(pickBooleanProperties(obj)).toEqual({});
    expect(obj).toEqual({ count: 0 });
    expect(() => pickBooleanProperties([])).toThrow(TypeError);
  });
});

describe("setBooleanKey", () => {
  it("actualiza un booleano sin mutar el objeto original", () => {
    const original = { active: false, label: "ok" };
    const result = setBooleanKey(original, "active", true);
    expect(result).toEqual({ active: true, label: "ok" });
    expect(original).toEqual({ active: false, label: "ok" });
    expect(result).not.toBe(original);
  });

  it("rechaza claves ausentes, no booleanas o valores inválidos", () => {
    expect(() => setBooleanKey({ active: true }, "missing", false)).toThrow(TypeError);
    expect(() => setBooleanKey({ count: 1 }, "count", true)).toThrow(TypeError);
    expect(() => setBooleanKey({ active: true }, "active", 1)).toThrow(TypeError);
    expect(() => setBooleanKey(null, "active", true)).toThrow(TypeError);
  });
});
