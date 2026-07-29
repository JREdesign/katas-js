import { describe, expect, it } from "vitest";
import { getInitials } from "./get-initials.js";

describe("getInitials", () => {
  it("obtiene las iniciales de un nombre", () => {
    expect(getInitials("Jorge García")).toBe("JG");
  });
