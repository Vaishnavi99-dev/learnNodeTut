// Common Js Way of Import is 
//const {add, sub} = require('./function.js');
// ES Import
import sub, {add} from './function.js';

console.log(add(3,4));
console.log(sub(6,4));