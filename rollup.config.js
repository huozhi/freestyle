import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/viewport.js',
  format: 'umd',
  moduleName: 'karna',
  dest: 'lib/viewport.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ]
};
