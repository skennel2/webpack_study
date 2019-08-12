import _ from 'lodash';

function component(){
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = "Click me and check the console";
    btn.onclick = import('./print').then(func => {
        console.log(func)
        func.printMe();
    });

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());