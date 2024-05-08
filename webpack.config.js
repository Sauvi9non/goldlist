const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', // webpack이 bundling할 파일,
  output: {
    path: path.resolve(__dirname, 'dist'), // bundling된 파일이 저장될 경로
    filename: 'bundle.js', // bundling된 파일 이름 
  },
  module: { // webpack이 파일을 해석할 때 사용할 규칙을 정의
    rules: [
      {
        test: /\.(js|jsx)$/, // .js나 .jsx로 끝나는 파일
        exclude: /node_modules/, // node_modules 폴더는 제외
        use: { // 사용할 loader
          loader: 'babel-loader', // babel-loader를 사용
          options: { // babel-loader에 옵션을 추가
            presets: ['@babel/preset-env', '@babel/preset-react'], // babel의 preset을 지정
          },
        },
      },
      {
        test: /\.css$/, // .css로 끝나는 파일
        use: ['style-loader', 'css-loader'], // style-loader와 css-loader를 사용
      },
    ],
  },
  plugins: [ //  webpack의 기본적인 동작에 추가적인 기능을 제공하는 속성
    new HtmlWebpackPlugin({ // HtmlWebpackPlugin을 사용해 index.html 파일을 dist 폴더에 복사
      template: './src/index.html', //
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};