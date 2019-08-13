# webpack_test

## Code Splitting 

### 엔트리포인트 여러개 두기
<pre>
<code>
    entry : {
        app : './src/index.js',
        print : './src/print.js'
    },
</code>
</pre>

### 플러그인 사용
<pre>
<code>
    plugins : [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title : 'Output Management'
        })
    ],
</code>
</pre>
CleanWebpackPlugin은 새로 빌드될때 마다 output 경로의 폴더를 정리하는 역할을 한다.

htmlWebpackPlugin은 새로 빌드될때 output으로 index.html 파일을 생성해준다.

### 중복피하기
'''javascript
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
'''
optimization.splitChunks 옵션을 사용하면 두 모듈(app, print)에서 공통적으로 사용하던 lodash 의존성이 새로운 chunk파일로 분리되어 생성되는것을 볼수 있다.
(app.bundle.js, print.bundle.js, index.html, vendors~app~print.bundle.js)


## 참고자료
https://webpack.js.org/guides/code-splitting/
