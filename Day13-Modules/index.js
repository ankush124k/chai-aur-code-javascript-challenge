import addNum from './add.js';
import person from './person.js';
import { add,subtract } from './math.js';
import * as math from "./constants.js";

console.log(addNum(5,8));
console.log(person.greet());

console.log(add(11,22));
console.log(subtract(11,22));



console.log(math.PI); 
console.log(math.square(4)); 
console.log(math.cube(3)); 

// npm install lodash
import _ from 'lodash';

const numbers = [10, 5, 3, 7];
const sortedNumbers = _.sortBy(numbers);

console.log(sortedNumbers); // Output: [3, 5, 7, 10]

// npm install axios

// main.js
import axios from 'axios';

axios.get('https://api.publicapis.org/entries')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

// npm install
// npm run build

// index.html
// webpack.config.js
// package.json