import { describe, it, expect } from "vitest";
import { groupBy } from "./group-by.js";

describe("groupBy", () => {
  it("agrupa por propiedad", () => {
    const users = [
      { name: "A", role: "admin" },
      { name: "B", role: "user" },
      { name: "C", role: "admin" }
    ];

    const result = groupBy(users, u => u.role);

    expect(result.admin).toHaveLength(2);
    expect(result.user).toHaveLength(1);
  });

  it("errores", () => {
    expect(() => groupBy(1, x => x)).toThrow();
    expect(() => groupBy([], 1)).toThrow();
  });
});
