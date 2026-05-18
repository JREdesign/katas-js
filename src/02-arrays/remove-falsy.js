export function removeFalsy(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("removeFalsy: arr debe ser un array");
  }
