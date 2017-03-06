var cmd = module.exports = {}
var fs = require('fs')

cmd.pwd = function(file){
    console.log(process.env.PWD)
}

cmd.date = function(file){
    var date = new Date()
    console.log(date.toUTCString())
}

cmd.ls = function(file) {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
  });
}

cmd.echo = function(file) {
  if (file[0] === '$') {
    var action = file.slice(1);
    var output = process.env[action];
    console.log(output);
  } else {
    console.log(file);
  }
}

cmd.cat = function(file) {
  fs.readFile(o, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

cmd.head = function(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    var one = data.indexOf('\n')
    var two = data.indexOf('\n', one + 1)
    var three = data.indexOf('\n', two + 1)
    var four = data.indexOf('\n', three + 1)
    var five = data.indexOf('\n', four + 1)
    console.log(data.slice(0, five));
  });
}

cmd.tail = function(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if(err) throw console.error();
    var end = data.lastIndexOf('\n')
    var secondFromEnd = data.lastIndexOf('\n', end-1)
    var thirdFromEnd = data.lastIndexOf('\n', secondFromEnd-1)
    var fourthFromEnd = data.lastIndexOf('\n', thirdFromEnd-1)
    var FifthFromEnd = data.lastIndexOf('\n', fourthFromEnd-1)
    
    console.log(data.slice(FifthFromEnd))
  });
}
