//import * as output from './lib/ES6Practice'
//import * as output from './lib/ES5Practice';
//import inputOutput from './lib/JSTest';
import inputOutput from './lib/Algorithms';

const testBed = document.querySelector('#testBed');
let outputStr = '';
for(let io of inputOutput) {
    outputStr += `<div><p>Title: ${io.title}</p><p>Input: ${JSON.stringify(io.input, null, '\t')}</p><p>Output: ${JSON.stringify(io.output, null, '\t')}</p></div>`
}
testBed.innerHTML = outputStr;
