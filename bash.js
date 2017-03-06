// console.log(process)
// console.log('process keys')
// console.log(Object.keys(process))

//Output a prompt

var cmd = require('./commands.js')
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var command = data.toString().trim(); // remove the newline
  if(command === 'pwd'){
    //console.log(process.env.PWD)
    cmd.pwd()
  }
  //cmd.pwd()
  else if (command === 'date') {
    //var date = new Date()
    //console.log(date.toUTCString())
    cmd.date()
  }
  //cmd.date()
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');

});
// process.stdin.on('data', function(data){
//
// })
