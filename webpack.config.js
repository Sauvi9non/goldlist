const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // webpack이 bundling할 파일,
  output: {
    path: path.resolve(__dirname, "dist"), // bundling된 파일이 저장될 경로
    filename: "bundle.js", // bundling된 파일 이름
  },
  module: {
    // webpack이 파일을 해석할 때 사용할 규칙을 정의
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "ts-loader" },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // .css로 끝나는 파일
        use: ["style-loader", "css-loader"], // style-loader와 css-loader를 사용
      },
    ],
  },
  plugins: [
    //  webpack의 기본적인 동작에 추가적인 기능을 제공하는 속성
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin을 사용해 index.html 파일을 dist 폴더에 복사
      template: "./index.html", //
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
