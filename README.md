# webpack_test

## Lazy Loading 

### 개요


### webpack-merge
```javascript
npm install --save-dev webpack-merge 
```

webpack-merge는 웹팩 설정파일을 분리할 때 공통적으로 사용하는 부분과 변하는 부분을 쉽게 분리할수 있게해준다.

webpack.common.js 파일에 공통적인 설정값들을 모아놓고,

개발전용 webpack.dev.js에 개발환경 전용 설정을 추가하는 식이다.

아래는 대략적인 webpack-merge를 사용한 webpack.dev.js의 형태이다.

```javascript
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: { 
    contentBase: './dist'
  }
});
```
### NPM Scripts

설정파일을 분리했다면 package.json의 script부분에 

아래와 같이 설정할 수있을 것이다. start 명령에서는 개발용 설정파일을, build 명령에서는 재품용 설정파일을 참조하도로했다.

```javascript
"scripts": {
    "start": "webpack-dev-server --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
}
```

## 참고자료
https://webpack.js.org/guides/production/