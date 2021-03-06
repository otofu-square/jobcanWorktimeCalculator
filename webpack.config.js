module.exports = {
  entry: {
    app: "./src/index.tsx",
    background: "./src/background.ts",
    worktime: "./src/worktime.ts"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist/js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
