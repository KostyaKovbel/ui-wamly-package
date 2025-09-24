import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
      }),
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/styles/constants.css",
    output: [
      {
        file: "dist/index.css",
        format: "es",
      },
    ],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
