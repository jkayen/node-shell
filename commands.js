var cmd = module.exports = {}

cmd.pwd = function(){
  //var command = data.toString().trim(); // remove the newline
  //if(command === 'pwd'){
    //console.log(process.env)
    console.log(process.env.PWD)
  //}
  process.stdout.write('\nprompt > ');
}

cmd.date = function(){
  //var command = data.toString().trim();
  //if (command === 'date') {
    var date = new Date()
    console.log(date.toUTCString())
  //}
  process.stdout.write('\nprompt > ');
}
