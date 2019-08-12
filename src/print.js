export default function printMe(){
    const message = _.join(['Another', 'module', 'loaded!'], ' ');

    console.log('I get called from print.js');
}