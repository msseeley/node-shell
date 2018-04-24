const fs = require('fs');

// 'files' will be an array of filenames, like ['bash.js', 'pwd.js']
module.exports = function ls () {
  fs.readdir('./', 'utf8', (err, files) => {
    if(err) {
      throw err
    } else {
      process.stdout.write(files.join('\n'))
      process.stdout.write("\nprompt >");
    }
});
}
