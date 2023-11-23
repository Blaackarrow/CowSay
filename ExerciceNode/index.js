
const cowsay = require("cowsay");
person = require('./information.js');
console.log(cowsay.say({
    text: `Hello I'm ${person.lastname} ${person.name} from ${person.campus}`
}));
