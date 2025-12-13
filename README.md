# Katas JS

Este repositorio contiene katas y ejercicios pequeños de JavaScript, pensados para practicar conceptos de forma constante y acumulativa. La idea no es crear proyectos grandes, sino resolver problemas sencillos con soluciones claras, tests y refactors cuando tenga sentido.

## Estructura

- Las katas están dentro de `src/` y se agrupan por temas (strings, arrays, objetos, etc.).
- Cada kata incluye:
  - un archivo con la solución en JavaScript
  - un archivo de tests para verificar el comportamiento

Ejemplo de estructura:

    src/
      01-strings/
        reverse-string.js
        reverse-string.test.js

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
