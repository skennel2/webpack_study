import _ from 'lodash';

function getComponent(){
    // /* webpackChunkName: "print" */ 이주석을 붙임으로써 print 모듈에 대한 chunk파일이 생성된다.
    return import(/* webpackChunkName: "print" */'./print').then(({default : func})=>{
        const element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.onclick = func;
        return element;
    });
}

getComponent().then(component=> {
    document.body.appendChild(component);
});

