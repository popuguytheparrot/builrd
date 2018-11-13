import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const cssExportMap = {};

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  external: [
    'react',
    'react-dom',
    'classnames'
  ],
  plugins: [
    resolve(),
    postcss({
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens;
          }
        })
      ],
      getExportNamed: false,
      getExport (id) {
        return cssExportMap[id];
      },
      modules: true,
      extract: 'dist/styles.css',
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true
    })
  ]
};
