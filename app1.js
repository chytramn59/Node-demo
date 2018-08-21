const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
console.log('yargs',argv);


var command = process.argv[2];
console.log('command','commandkk');

if (command === 'list'){
    notes.getAll();
}

else if(command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
   if(note){
       console.log("hgjjf");
       console.log("--");
       console.log('title: ${note.title}');
       console.log('body: ${note.body}');
   }
   else{
       console.log("error occured");
   }
}
else if(command === 'read'){
   notes.readNote(argv.title);
}
else if(command === 'remove'){
   notes.removeNote(argv.title);
}
else {
    console.log('commond not found');
}