import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { resolve } from 'path'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: resolve('src', 'is', 'index.ts'),
    output: [
      { format: 'esm', file: resolve('is', 'index.esm.js') },
      { format: 'esm', file: resolve('is', 'index.js') },
      { format: 'cjs', file: resolve('is', 'index.cjs.js') },
    ],
    plugins: [
      typescript(),
      commonjs(),
      nodeResolve(),
    ]
  },
  {
    input: resolve('src', 'is', 'index.ts'),
    output: [
      { format: 'esm', file: resolve('is', 'index.d.ts') },
      { format: 'esm', file: resolve('is', 'index.esm.d.ts') },
      { format: 'esm', file: resolve('is', 'index.cjs.d.ts') },
    ],
    plugins: [dts()],
  },
]
