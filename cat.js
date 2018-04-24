const fs = require('fs')

const cat = (name) => {
  return fs.readFile(name, (err, data) => {
    if (err) console.log(err.message)
    else {
      console.log(data.toString())
    }
  })
}

module.exports = cat
