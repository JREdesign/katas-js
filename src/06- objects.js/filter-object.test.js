import { describe, expect, it } from "vitest";
import { filterObject } from "./filter-object.js";

describe("filterObject", () => {
  it("filtra propiedades según su valor", () => {
    const result = filterObject(
      { a: 1, b: 2, c: 3 },
      value => value >= 2
    );
