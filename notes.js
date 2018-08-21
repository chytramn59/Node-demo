console.log('starting notes.js');

// console.log(module);
// module.exports.age = 25;
 
// module.exports.addNote = () =>{
//     console.log('addNote');
//     return 'New note';  
// }

// /* above is for juzt to check module  */
//  module.exports.addNum = (a,b) =>{
//     return a+b;
//  }
const fs = require('fs');

var fetchNote = () =>{
    try{
      var noteString = fs.readFileSync('note-data.json');
      return JSON.parse(noteString);
    }
    catch(e){
        return[];
    }
  };

var saveNotes = (notes) =>{
    fs.writeFileSync('note-data.json',JSON.stringify(notes));
};

var addNote = (title,body) =>{
  var notes = fetchNote();
  var note ={
      title,
      body
  };

  var duplicate = notes.filter ((note)=>note.title === title);
  if (duplicate.length === 0){
      notes.push(note);
     saveNotes(notes);
     return note;
}
}
var getAll = () =>{
    console.log("adding list");
}
var readNote =(title)=>{
    console.log('reading note',title);
}
var removeNote =(title)=>{
    console.log('remove note',title);
}

 module.exports = {
     addNote,
     getAll,
     readNote,
     removeNote
 }