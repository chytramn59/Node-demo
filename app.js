console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _  = require('lodash');
const notes = require('./notes.js');
var user = os.userInfo();

// console.log(user);

 console.log('res',notes.addNum(5,4));
 console.log(_.isString('chytra'));

 var fillArray = _.uniq(['chytra',1,1,2,3,4,3,'chytra'])
 console.log(fillArray);
// fs.appendFile('hi.txt',`hi ${user.username } your age ${notes.age}`,function(err)
// {
//     if(err){
//         console.log("error");
//     }
// });
   