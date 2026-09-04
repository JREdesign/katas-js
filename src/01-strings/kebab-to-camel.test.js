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

    it("mantiene strings sin guiones", () => {
    expect(kebabToCamel("hello")).toBe("hello");
  });

    it("devuelve vacío para un string vacío", () => {
    expect(kebabToCamel("")).toBe("");
  });

    it("lanza error si no recibe un string", () => {
    expect(() => kebabToCamel(123)).toThrow(TypeError);
    expect(() => kebabToCamel(null)).toThrow(TypeError);
  });
  
});
