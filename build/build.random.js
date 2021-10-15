import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { resolve } from 'path'
import dts from 'rollup-plugin-dts'

const module = 'random'

export default [
  {
    input: resolve('src', module, 'index.ts'),
    output: [
      { format: 'esm', file: resolve(module, 'index.esm.js') },
      { format: 'esm', file: resolve(module, 'index.js') },
      { format: 'cjs', file: resolve(module, 'index.cjs.js') },
    ],
    plugins: [
      typescript(),
      commonjs(),
      nodeResolve(),
    ]
  },
  {
    input: resolve('src', module, 'index.ts'),
    output: [
      { format: 'esm', file: resolve(module, 'index.d.ts') },
      { format: 'esm', file: resolve(module, 'index.esm.d.ts') },
      { format: 'esm', file: resolve(module, 'index.cjs.d.ts') },
    ],
    plugins: [dts()],
  },
]
