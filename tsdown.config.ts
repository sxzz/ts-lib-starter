import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: 'esm',
  target: 'node20.18',
  clean: true,
  dts: { transformer: 'oxc' },
  platform: 'neutral',
})
