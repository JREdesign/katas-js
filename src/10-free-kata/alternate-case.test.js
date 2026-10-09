import { describe, expect, it } from "vitest";
import { alternateCase } from "./alternate-case.js";

describe("alternateCase", () => {
  it("alterna mayúsculas y minúsculas empezando por mayúscula", () => {
    expect(alternateCase("javascript")).toBe("JaVaScRiPt");
  });

  it("permite empezar por minúscula", () => {
    expect(alternateCase("javascript", false)).toBe("jAvAsCrIpT");
  });
});
