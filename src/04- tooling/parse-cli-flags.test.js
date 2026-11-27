import { describe, expect, it } from "vitest";
import { parseCliFlags, parseCliFlagsWithDefaults, hasCliFlag } from "./parse-cli-flags.js";

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

describe("parseCliFlagsWithDefaults", () => {
  it("conserva los valores predeterminados no especificados", () => {
    expect(parseCliFlagsWithDefaults(["--watch"], { mode: "dev", watch: false }))
      .toEqual({ mode: "dev", watch: true });
  });

  it("prioriza las opciones explícitas, incluidos valores vacíos", () => {
    expect(parseCliFlagsWithDefaults(["--mode=prod", "--name="], {
      mode: "dev",
      name: "app",
    })).toEqual({ mode: "prod", name: "" });
  });

  it("admite valores predeterminados omitidos", () => {
    expect(parseCliFlagsWithDefaults(["--watch"])).toEqual({ watch: true });
  });

  it("no modifica el objeto de valores predeterminados", () => {
    const defaults = Object.freeze({ mode: "dev" });
    expect(parseCliFlagsWithDefaults(["--mode=prod"], defaults))
      .toEqual({ mode: "prod" });
    expect(defaults).toEqual({ mode: "dev" });
  });

  it.each([[null], [42], ["dev"], [[]]])(
    "rechaza valores predeterminados inválidos: %j",
    (defaults) => {
      expect(() => parseCliFlagsWithDefaults([], defaults)).toThrow(TypeError);
    }
  );

  it("mantiene la validación de argumentos del analizador original", () => {
    expect(() => parseCliFlagsWithDefaults([42], {})).toThrow(TypeError);
  });
});

describe("parseCliFlags: arrays dispersos", () => {
  it("rechaza arrays con posiciones vacías", () => {
    expect(() => parseCliFlags(new Array(2))).toThrow(TypeError);
    const args = ["--watch", , "--mode=dev"];
    expect(() => parseCliFlags(args)).toThrow(TypeError);
  });

  it("mantiene la validación al combinar valores predeterminados", () => {
    expect(() => parseCliFlagsWithDefaults(new Array(1), { watch: false }))
      .toThrow(TypeError);
  });
});

describe("hasCliFlag", () => {
  it("detecta opciones booleanas y opciones con valor vacío", () => {
    expect(hasCliFlag(["--watch", "--name="], "watch")).toBe(true);
    expect(hasCliFlag(["--watch", "--name="], "name")).toBe(true);
  });

  it("ignora opciones ausentes y posteriores al separador", () => {
    expect(hasCliFlag(["--watch", "--", "--mode=dev"], "mode")).toBe(false);
    expect(hasCliFlag([], "watch")).toBe(false);
  });

  it("no confunde propiedades heredadas con opciones explícitas", () => {
    expect(hasCliFlag([], "toString")).toBe(false);
    expect(hasCliFlag(["--toString"], "toString")).toBe(true);
    expect(hasCliFlag(["--__proto__=value"], "__proto__")).toBe(true);
  });

  it("valida el nombre y los argumentos", () => {
    expect(() => hasCliFlag([], "")).toThrow(TypeError);
    expect(() => hasCliFlag([], null)).toThrow(TypeError);
    expect(() => hasCliFlag([42], "watch")).toThrow(TypeError);
  });
});
