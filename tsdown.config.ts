import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: 'esm',
  target: 'node18.12',
  clean: true,
  dts: { transformer: 'oxc' },
  platform: 'neutral',
})
