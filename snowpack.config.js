module.exports = {
  mount: {
    src: '/',
  },
  plugins: ['@snowpack/plugin-typescript', '@snowpack/plugin-postcss'],
  installOptions: {
    installTypes: true,
  },
  experiments: {
    optimize: {
      bundle: false,
      minify: true,
      target: 'esnext',
    },
  },
}
