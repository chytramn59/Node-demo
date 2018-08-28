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
    return fetchNote();
}
var readNote =(title)=>{
    var notes = fetchNote();
    var filteredNote = notes.filter((note) => note.title === title);
    return filteredNote[0];

}

var removeNote =(title)=>{
   var notes = fetchNote();
   var filteredNote = notes.filter((note) =>note.title !== title);
       saveNotes(filteredNote);
       return notes.length !== filteredNote.length;
}

var logNote =(note)=>{
    console.log("--");
    console.log('title: ${note.title}');
    console.log('body: ${note.body}');
}
 module.exports = {
     addNote,
     getAll,
     readNote,
     removeNote,
     logNote,
 }