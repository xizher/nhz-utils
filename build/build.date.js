import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { resolve } from 'path'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: resolve('src', 'date', 'index.ts'),
    output: [
      { format: 'esm', file: resolve('date', 'index.esm.js') },
      { format: 'esm', file: resolve('date', 'index.js') },
      { format: 'cjs', file: resolve('date', 'index.cjs.js') },
    ],
    plugins: [
      typescript(),
      commonjs(),
      nodeResolve(),
    ]
  },
  {
    input: resolve('src', 'date', 'index.ts'),
    output: [
      { format: 'esm', file: resolve('date', 'index.d.ts') },
      { format: 'esm', file: resolve('date', 'index.esm.d.ts') },
      { format: 'esm', file: resolve('date', 'index.cjs.d.ts') },
    ],
    plugins: [dts()],
  },
]
