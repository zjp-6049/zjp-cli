import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import externals from "rollup-plugin-node-externals";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import typescript from 'rollup-plugin-typescript2';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      // 输入目标文件夹
      dir: 'dist',
      format: 'cjs',
    }
  ],
  plugins: [
    externals(),
    nodeResolve(),
    commonjs(),
    json(),
    terser(),
    typescript(),
  ],
})