import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'node18.12',
  splitting: true,
  cjsInterop: true,
  clean: true,
  dts: true,
  platform: 'neutral',
})
