// var obj ={
//     name : "chytra",
//     age :25
// };

// var stringobj = JSON.stringify(obj);
// console.log(typeof stringobj);
// console.log(stringobj);
  
/* stringify convert object into string  */

// var personString = '{"name":"chy","age":25}'
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

/* parse convert string into object */


const fs = require ('fs');

var originalNote = {
    title : "you created a json file",
    body : "some body"
}

var originalNotestring = JSON.stringify(originalNote);
fs.writeFileSync('text.json',originalNotestring);

var noteString = fs.readFileSync('text.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
console.log(note.body);