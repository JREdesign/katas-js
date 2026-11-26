import { describe, expect, it } from "vitest";
import { parseCliFlags } from "./parse-cli-flags.js";

describe("parseCliFlags", () => {
  it("interpreta opciones booleanas", () => {
    expect(parseCliFlags(["--watch", "--verbose"])).toEqual({
      watch: true,
      verbose: true,
    });
  });

  it("interpreta opciones con valor sin convertir su tipo", () => {
    expect(parseCliFlags(["--mode=dev", "--port=3000", "--enabled=false"])).toEqual({
      mode: "dev",
      port: "3000",
      enabled: "false",
    });
  });

  it("combina opciones booleanas y opciones con valor", () => {
    expect(parseCliFlags(["--watch", "--mode=dev"])).toEqual({
      watch: true,
      mode: "dev",
    });
  });

  it("ignora argumentos posicionales y opciones cortas", () => {
    expect(parseCliFlags(["build", "-v", "--watch", "src"])).toEqual({
      watch: true,
    });
  });

  it("conserva la última aparición de una opción repetida", () => {
    expect(parseCliFlags(["--mode=dev", "--mode=prod"])).toEqual({
      mode: "prod",
    });
  });
});
