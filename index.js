// var express = require('express');
// var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });

// app.post('/hello', function(req, res){
//     console.log(req);
//     res.send("hi!");
//  });

// app.listen(4300);
/* without routes above */

// var express = require('express');
// var app = express();

// var things = require('./routes.js');

// //both index.js and things.js should be in same directory
// app.use('/routes', things);

// app.listen(4500);

// /* above for adding routes */

var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(4600);