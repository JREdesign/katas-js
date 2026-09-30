import { describe, expect, it } from "vitest";
import { compactObject } from "./compact-object.js";

describe("compactObject", () => {
  it("elimina propiedades con valores falsy", () => {
    expect(
      compactObject({
        name: "Jorge",
        age: 0,
        active: false,
        role: "developer",
        note: ""
      })
    ).toEqual({
      name: "Jorge",
      role: "developer"
    });
  });

    it("mantiene objetos y arrays vacíos porque son truthy", () => {
    expect(
      compactObject({
        settings: {},
        items: []
      })
