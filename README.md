# Recitr

A simple module which given a list of statments, will return a random one of them.

## Usage

The module exposes two factory methods to construct a recitr, `fromStatements` and `fromFile`

### `fromFile`

Accepts a path to a file (encodeded in UTF-8) containing a list of statements to recite, each one on it's own line, returns a `Promise` which will be rejected if there are any issues opening the file or the file didn't contain anything 

### `fromStatements`

Accepts an array of strings, and immediately returns a recitr instance.

### Examples

- To use the `Recitr` class in a TypeScript file

```ts
import { Recitr } from "Recitr";

const recitr = Recitr.fromStatements(["First statment", "Second statement"]);

console.info(recitr.say());
```

- To use the `Recitr` class in a JavaScript file

```js
const Recitr = require('Recitr').Recitr;

const recitr = Recitr.fromStatements(["First statement", "Second statment"]);

console.info(recitr.say());
```
