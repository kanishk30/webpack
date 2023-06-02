import join from 'lodash/join';
import {arrayJoin} from './util';
import {stringSplit} from './util';

import {Hello} from './Hello/component';




// console.log(join([1,2], '~'));
console.log(arrayJoin([100,200], ' WEBPACK'));
console.log(stringSplit('string to be split', ' '));
console.log('hello webpack!!!!!!');

console.log(Hello({name: 'John'}))