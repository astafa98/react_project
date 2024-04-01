module.exports = {
  plugins: [],
  style: {
    sass: {
      loaderOptions: {
        additionalData:
          '@import "src/styles/_variables.scss";\n' +
          '@import "src/styles/_mixins.scss";\n',
      },
    },
  },
};
