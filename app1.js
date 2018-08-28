const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
.command('add','Add a new note',{
    title:{
        describe: 'title of note',
        instead : true,
        alias : 't'
    },
    body:{
        describe: 'body of note',
        instead : true,
        alias : 'b'
    }
})
.help()
.argv

console.log('yargs',argv);


var command = process.argv[2];
console.log('command','commandkk');

if (command === 'list'){
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length}note(s).`);
    allNotes.forEach((note)=>notes.logNote(note));
        
    
}

else if(command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
   if(note){
       console.log("hgjjf");
       notes.logNote(note);
   }
   else{
       console.log("error occured");
   }
}
else if(command === 'read'){
   var note = notes.readNote(argv.title);
   if(note){
    console.log("note found");
    notes.logNote(note);
}
else{
    console.log("error");
}
}
else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'notes was removed':'not found';
  console.log(message);
}
else {
    console.log('commond not found');
}