//import {output1, output2} from './lib/ES6Practice'
import * as output from './lib/ES5Practice';
const outputDiv = document.querySelector('#content1');
outputDiv.innerHTML = output.output1;
const outputDiv2 = document.querySelector('#content2');
outputDiv2.innerHTML = output.output2;


//import './css/main.scss';
// import {RandomGenerator} from './lib/RandomGenerator';

// const outputParagraph = document.querySelector('#outputParagraph');
// const outputRandomInt = () => {
//     outputParagraph.textContent = RandomGenerator.randomInteger();
// }
// const outputRandomRange = () => {
//     outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
// }

// const buttonRndInt = document.querySelector('.randomInt');
// const buttonRndRange = document.querySelector('.randomRange');

// buttonRndInt.addEventListener('click', outputRandomInt);
// buttonRndRange.addEventListener('click', outputRandomRange);