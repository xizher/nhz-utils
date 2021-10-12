import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { resolve } from 'path'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: resolve('src', 'watch', 'index.ts'),
    output: [
      { format: 'esm', file: resolve('watch', 'index.esm.js') },
      { format: 'esm', file: resolve('watch', 'index.js') },
      { format: 'cjs', file: resolve('watch', 'index.cjs.js') },
    ],
    plugins: [
      typescript(),
      commonjs(),
      nodeResolve(),
    ]
  },
  {
    input: resolve('src', 'watch', 'index.ts'),
    output: [
      { format: 'esm', file: resolve('watch', 'index.d.ts') },
      { format: 'esm', file: resolve('watch', 'index.esm.d.ts') },
      { format: 'esm', file: resolve('watch', 'index.cjs.d.ts') },
    ],
    plugins: [dts()],
  },
]
