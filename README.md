# Katas JS

Este repositorio contiene katas y ejercicios pequeños de JavaScript, pensados para practicar conceptos de forma constante y acumulativa. La idea no es crear proyectos grandes, sino resolver problemas sencillos con soluciones claras, tests y refactors cuando tenga sentido.

## Estructura

- Las katas están dentro de `src/` y se agrupan por temas.
- Actualmente hay ejercicios de:
  - strings
  - arrays
  - números
  - objetos
  - chunking de arrays
  - palíndromos
  - programación funcional
  - asincronía
  - agrupación de valores consecutivos
  - katas libres para practicar problemas variados
- Cada kata suele incluir:
  - un archivo con la solución en JavaScript
  - un archivo de tests para verificar el comportamiento

Entre las katas libres hay ejercicios como sumas limitadas y rotación de arrays, además de pequeñas variaciones pensadas para practicar refactors y ampliar cobertura con tests.

Ejemplo de estructura:

    src/
      01-strings/
        reverse-string.js
        reverse-string.test.js

      10-free-kata/
        bounded-sum.js
        bounded-sum.test.js
        rotate-array.js
        rotate-array.test.js

      11-group-consecutive/
        group6.js
        group6.test.js

## Cómo ejecutar los tests

1) Instalar dependencias:

    npm install

2) Ejecutar tests:

    npm test

3) Ejecutar tests en modo watch:

    npm run test:watch

## Filosofía

- Katas pequeñas, sin sobreingeniería.
- Tests simples, pero útiles.
- Commits frecuentes y coherentes:
  - feat: nueva kata
  - test: añadir/mejorar tests
  - refactor: mejorar una solución existente
  - chore: tooling o estructura
