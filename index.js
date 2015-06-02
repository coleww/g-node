var kexec = require('kexec')
var fs = require('fs')

module.exports = function(argString){
  if (fs.existsSync('bin/rails')) {
    kexec('rails generate ' + argString)
  } else if (fs.existsSync('.ember-cli')) {
    kexec('ember generate ' + argString)
  } else {
    console.log('you are not currently inside of a monolith')
  }
}