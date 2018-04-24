const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline


  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

  if (cmd === 'pwd') {
    pwd()
  }

  if (cmd === 'ls') {
    ls()
  }

  if (cmd.slice(0,3) === 'cat'){
    const arr = cmd.split(' ')
    const filename = arr[1].toString()
    cat(filename)
  }

});
