
export function sumArray(arr) {
  if (!Array.isArray(arr)) {
      throw new TypeError("sumArray: arr debe ser un array");
        }
          return arr.reduce((acc, n) => {
              if (typeof n !== "number" || Number.isNaN(n)) {
                    throw new TypeError("sumArray: todos los elementos deben ser numbers válidos");
                        }
                            return acc + n;
                              }, 0);
                              }
