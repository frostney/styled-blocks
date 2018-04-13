import babel from 'rollup-plugin-babel';

export default ['es', 'cjs', 'umd'].map(format => ({
  input: 'src/index.js',
  output: {
    format,
    file: `dist/styled-blocks.${format}.js`,
    name: 'styled-blocks',
  },
  plugins: [babel()],
}));
