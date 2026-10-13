export function chunkString(text, size) {
  if (typeof text !== "string") {
    throw new TypeError("chunkString: text debe ser una cadena");
  }

  if (!Number.isInteger(size) || size <= 0) {
    throw new RangeError("chunkString: size debe ser un entero positivo");
  }

  const characters = [...text];
  const chunks = [];

  for (let index = 0; index < characters.length; index += size) {
    chunks.push(characters.slice(index, index + size).join(""));
  }

  return chunks;
}

export function countStringChunks(text, size) {
  return chunkString(text, size).length;
}

export function chunkStringSummary(text, size) {
  const chunks = chunkString(text, size);

  return {
    chunks,
    count: chunks.length,
    lastChunk: chunks.at(-1) ?? "",
  };
}
