# @ungap/degap

[![Greenkeeper badge](https://badges.greenkeeper.io/ungap/degap.svg)](https://greenkeeper.io/)

The ideal [rollup-plugin-includepaths](https://www.npmjs.com/package/rollup-plugin-includepaths) `@ungap` companion.

This module provides all native based fallbacks for any `@ungap/...` module that might not be needed for modern engines.

```js
import resolve from 'rollup-plugin-node-resolve';
import includePaths from 'rollup-plugin-includepaths';

export default {
  input: 'esm/index.js',
  plugins: [
    includePaths({
      include: {
        // will map @ungap/assign to a plain `Object.assign`
        '@ungap/assign': 'node_modules/@ungap/degap/assign.js'
      },
    }),
    resolve({module: true})
  ],
  output: {
    exports: 'named',
    file: 'degap.js',
    format: 'iife',
    name: 'degap'
  }
};

```
