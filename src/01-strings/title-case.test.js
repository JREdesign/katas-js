import { describe, expect, it } from "vitest";
import { titleCase } from "./title-case.js";

describe("titleCase", () => {
  it("capitaliza la primera letra de cada palabra", () => {
    expect(titleCase("hola mundo")).toBe("Hola Mundo");
  });
