'use strict';
var prompt = require('prompt');
prompt.start();

//prompt.get(['name'], function(error, result) {
  // console.log('Hello, ' + result['name'] + '!');
//});

prompt.get(['name'], function(error, result) {

    var piggyname = result.name.replace(result.name[0],'') + result.name[0] + "ay" ;

    console.log('Hello, ' + piggyname + '!');
});





