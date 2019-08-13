# webpack_test

## Environment Variables
개발환경과 프로덕션환경간 빌드의 명확성을 위해 환경변수를 사용할 수 있는 방법을 제공한다.

### --env 옵션
``` console

webpack --env.NODE_ENV=local --env.production --progress

```
webpack 커맨드 명령어의 --env 옵션에 원하는 만큼의 환경변수를 전달할 수 있고

webpack.config.js에서 액세스할 수 있다.

## 참고자료
https://webpack.js.org/guides/environment-variables/
