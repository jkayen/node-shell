var cmd = module.exports = {}
var fs = require('fs')

cmd.pwd = function(file){
  //var command = data.toString().trim(); // remove the newline
  //if(command === 'pwd'){
    //console.log(process.env)
    console.log(process.env.PWD)
  //}
  process.stdout.write('\nprompt > ');
}

cmd.date = function(file){
  //var command = data.toString().trim();
  //if (command === 'date') {
    var date = new Date()
    console.log(date.toUTCString())
  //}
  process.stdout.write('\nprompt > ');
}

cmd.ls = function(file) {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
  });
}

cmd.echo = function(file) {
  //need to fix PATH
  if (file === '$') {
    var action = file.slice(1).trim();
    var output = process.env[action];
    console.log(output);
  } else {
    console.log(file);
  } 
  process.stdout.write("prompt > ");
}

cmd.cat = function(file) {
  var f = fs.readFile(o, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  console.log(f);
  process.stdout.write("prompt > ");
}

cmd.head = function(file) {
  var f = fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  console.log(f);
  process.stdout.write("prompt > ");  
}

cmd.tail = function(file) {

}