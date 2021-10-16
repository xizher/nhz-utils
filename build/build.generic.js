import { resolve } from 'path'
import dts from 'rollup-plugin-dts'

const module = 'generic'

export default [
  {
    input: resolve('src', module, 'index.ts'),
    output: [
      { format: 'esm', file: resolve(module, 'index.d.ts') },
    ],
    plugins: [dts()],
  },
]
