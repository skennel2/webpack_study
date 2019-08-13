import _ from 'lodash';

export default function printMe(){
    const message = _.join(['Another', 'module', 'loaded!!!'], ' ');

    alert(message);
}