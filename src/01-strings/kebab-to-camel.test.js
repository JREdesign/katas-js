import { describe, expect, it } from "vitest";
import { kebabToCamel } from "./kebab-to-camel.js";

describe("kebabToCamel", () => {
  it("convierte kebab-case a camelCase", () => {
    expect(kebabToCamel("hello-world")).toBe("helloWorld");
    expect(kebabToCamel("background-color")).toBe("backgroundColor");
  });

  it("convierte varias palabras", () => {
    expect(kebabToCamel("user-profile-image")).toBe("userProfileImage");
  });    
