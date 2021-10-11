import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { resolve } from 'path'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: resolve('src', 'return', 'index.ts'),
    output: [
      { format: 'esm', file: resolve('return', 'index.esm.js') },
      { format: 'esm', file: resolve('return', 'index.js') },
      { format: 'cjs', file: resolve('return', 'index.cjs.js') },
    ],
    plugins: [
      typescript(),
      commonjs(),
      nodeResolve(),
    ]
  },
  {
    input: resolve('src', 'return', 'index.ts'),
    output: [
      { format: 'esm', file: resolve('return', 'index.d.ts') },
      { format: 'esm', file: resolve('return', 'index.esm.d.ts') },
      { format: 'esm', file: resolve('return', 'index.cjs.d.ts') },
    ],
    plugins: [dts()],
  },
]
