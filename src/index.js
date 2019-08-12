import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import XmlData from './data.xml';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;    

    element.appendChild(myIcon);

    console.log(XmlData);

    return element;
}
  
document.body.appendChild(component());