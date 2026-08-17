# 11 - Group consecutive

Crea una función `groupConsecutive(numbers)` que reciba un array de números enteros y agrupe en subarrays los valores que sean consecutivos **según el orden recibido**.

## Ejemplos

```js
groupConsecutive([1, 2, 3, 7, 8, 10]);
// [[1, 2, 3], [7, 8], [10]]

groupConsecutive([-2, -1, 0, 4]);
// [[-2, -1, 0], [4]]

groupConsecutive([]);
// []
```

## Reglas

- La entrada debe ser un array.
- Todos sus elementos deben ser números enteros.
- Dos valores pertenecen al mismo grupo únicamente cuando el siguiente valor es exactamente `anterior + 1`.
- Los duplicados rompen la secuencia: `[1, 2, 2, 3]` se convierte en `[[1, 2], [2, 3]]`.
- No se debe ordenar ni modificar el array original.

## Objetivo

Practicar recorrido de arrays, comparación entre elementos adyacentes, construcción incremental de estructuras y validación de argumentos.
