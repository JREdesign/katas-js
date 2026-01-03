import { describe, it, expect } from "vitest";
import { isPrime } from "./is-prime.js";

describe("isPrime", () => {
  it("devuelve false para n < 2", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });

  it("maneja primos comunes", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(29)).toBe(true);
  });

  it("maneja no primos comunes", () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(21)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  it("lanza error si no es entero", () => {
    expect(() => isPrime(2.2)).toThrow(TypeError);
    expect(() => isPrime("7")).toThrow(TypeError);
  });
});
