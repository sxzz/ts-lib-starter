import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src'],
  format: ['cjs', 'esm'],
  target: 'node12',
  clean: true,
  sourcemap: true,
  dts: true,
})
