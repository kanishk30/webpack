

import join from 'lodash/join';
import {arrayJoin} from './util';
import {stringSplit} from './util';

import {Hello} from './Hello/component';

import { mergeString } from '../merge';

import {createRoot} from 'react-dom/client';

// console.log(join([1,2], '~'));
console.log(arrayJoin([100,200], ' WEBPACK'));
console.log(stringSplit('string to be split', ' '));
console.log('hello webpack!!!!!!');




createRoot(document.body).render(<Hello name = 'John'/>)

// console.log(mergeString('str1', 'str2'))


/*
const div = document.createElement('di3v');
div.innerHTML = Hello({name: 'John'});
document.body.appendChild(div);
*/