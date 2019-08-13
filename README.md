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
CleanWebpackPlugin은 새로 빌드될때 마다 output 경로의 폴더를 정리하는 역할을 합니다.

htmlWebpackPlugin은 새로 빌드될때 output으로 index.html파일을 생성해줍니다.

## 참고자료
https://webpack.js.org/guides/code-splitting/
