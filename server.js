var express = require('express');

var app = express();
const PORT  = process.env.PORT || 5000;

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('running at port ' + PORT);
});
