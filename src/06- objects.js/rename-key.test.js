import { describe, expect, it } from "vitest";
import { renameKey } from "./rename-key.js";

describe("renameKey", () => {
  it("cambia el nombre de una propiedad", () => {
    expect(renameKey({ name: "Jorge", age: 30 }, "name", "username")).toEqual({
      username: "Jorge",
      age: 30
    });
  });

  it("devuelve una copia si la propiedad no existe", () => {
    const original = { a: 1 };
    const result = renameKey(original, "missing", "other");

    expect(result).toEqual({ a: 1 });
    expect(result).not.toBe(original);
  });
