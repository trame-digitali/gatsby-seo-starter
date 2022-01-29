exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        //crypto: require.resolve('crypto-browserify'),
        //stream: require.resolve('stream-browserify'), //nel caso si volessero usare le polyfill
        path: false,
      },
    },
  })
};

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
