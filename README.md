# webpack_test

## Production 

### 개요
프로젝트의 Product 버전과 Development 버전의 설정파일을 분리하는 법에 대해 다룬다.

보통의 경우 제품버전의 빌드결과와 개발버전의 빌드결과는 추구하는 바가 다르다.

제품버전의 경우 번들파일의 가능한 작게 유지하는것과 더불어 로드속도와 같은 최적화 부분을 가장 크게 고려한다. 

개발버전은 디버깅등의 개발편의성을 아무래도 고려할 수 밖에 없어서 제품버전의 설정과는 달라질 수 밖에 없다.

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