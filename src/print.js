import _ from 'lodash';

export default function printMe(){
    const message =  _.join(['Another', 'module', 'loaded!'], ' ');
    console.log(message);
}