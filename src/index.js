import _ from 'lodash';
import Print from './print'

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick = Print;
    return element;
}

document.body.appendChild(component());

