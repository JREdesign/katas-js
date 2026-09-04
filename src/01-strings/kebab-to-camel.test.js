import { describe, expect, it } from "vitest";
import { kebabToCamel } from "./kebab-to-camel.js";

describe("kebabToCamel", () => {
  it("convierte kebab-case a camelCase", () => {
    expect(kebabToCamel("hello-world")).toBe("helloWorld");
    expect(kebabToCamel("background-color")).toBe("backgroundColor");
  });
