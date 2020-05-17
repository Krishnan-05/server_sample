var express = require('express');
var app = express();
app.listen(8000,function(){
    console.log('its works');

})
app.get('/whoiam/:name', function (req, res) {
    var name = req.params.name;
        var output;
       console.log( name );
       if (name == 'Karthik') {
           output = name + " is NEC Alumni" ;
       } else {
         output = name + " is current student" ;
       }
       res.end( JSON.stringify(output));
    });
    app.get('/today/:name', function (req, res) {
        var name = req.params.name;
            var output;
           console.log( name );
           if (name == 'Sunday') {
               output = name + " is a Good day" ;
           } else {
             output = name + " is a better day" ;
           }
           res.end( JSON.stringify(output));
        });