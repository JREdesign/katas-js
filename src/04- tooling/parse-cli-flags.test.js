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

describe("parseCliFlags: casos límite", () => {
  it("devuelve un objeto vacío sin opciones", () => {
    expect(parseCliFlags([])).toEqual({});
    expect(parseCliFlags(["build", "-v"])).toEqual({});
  });

  it("deja de interpretar opciones después del separador --", () => {
    expect(parseCliFlags(["--watch", "--", "--mode=prod"])).toEqual({
      watch: true,
    });
  });

  it("conserva valores vacíos y signos igual adicionales", () => {
    expect(parseCliFlags(["--name=", "--query=a=b=c"])).toEqual({
      name: "",
      query: "a=b=c",
    });
  });

  it("ignora opciones sin nombre", () => {
    expect(parseCliFlags(["--=value", "--watch"])).toEqual({ watch: true });
  });

  it("no modifica el array original", () => {
    const args = ["--watch", "--mode=dev"];
    parseCliFlags(args);
    expect(args).toEqual(["--watch", "--mode=dev"]);
  });

  it.each([[null], [undefined], ["--watch"], [42], [["--watch", 42]]])(
    "rechaza argumentos inválidos: %j",
    (value) => {
      expect(() => parseCliFlags(value)).toThrow(TypeError);
    }
  );
});
