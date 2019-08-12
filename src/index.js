import _ from 'lodash';

function getComponent(){
    return import('./print').then(({default : func})=>{
        const element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.onclick = func;
        return element;
    });
}

getComponent().then(component=> {
    document.body.appendChild(component);
});

