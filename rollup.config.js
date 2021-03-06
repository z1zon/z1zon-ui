import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';
import babel from '@rollup/plugin-babel';

import path from 'path';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.js', format: 'cjs' }],

    plugins: [
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
      commonjs(),
      typescript({
        clean: true,
        sourceMap: false,
      }),
      resolve({ extensions }),
      image(),
      url(),
      terser(),
      peerDepsExternal(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],

    plugins: [
      dts(),
      babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
    ],
  },
];
