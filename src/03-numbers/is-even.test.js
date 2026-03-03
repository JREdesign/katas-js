export function isEven(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError("isEven: n debe ser entero");
  }
  return n % 2 === 0;
}
it("devuelve false para números impares", () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });
it("devuelve false para números impares", () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });
it("lanza error si no es entero", () => {
    expect(() => isEven(1.5)).toThrow();
    expect(() => isEven("2")).toThrow();
    expect(() => isEven(null)).toThrow();
  });
});
