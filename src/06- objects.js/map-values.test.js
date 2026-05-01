import { describe, it, expect } from "vitest";
import { mapValues } from "./map-values.js";

describe("mapValues", () => {
  it("transforma los valores manteniendo claves", () => {
    expect(mapValues({ a: 1, b: 2 }, n => n * 2)).toEqual({ a: 2, b: 4 });
  });
