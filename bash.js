// console.log(process)
// console.log('process keys')
// console.log(Object.keys(process))

var cmd = require('./commands.js')
//Output a prompt

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var command = data.toString().slice(0, data.toString().indexOf(' ')); // remove the newline
  var input = data.toString().slice(data.toString().indexOf(' ') + 1).trim();
  if (command === 'pwd'){
    cmd.pwd()
  } else if (command === 'date') {
    cmd.date()
  } else if (command === 'ls') {
    cmd.ls()
  } else if (command === 'echo') {
    cmd.echo(input)
  } else if (command === 'cat') {
    cmd.cat(input);
  } else if (command === 'head') {
    cmd.head(input);
  }

});


