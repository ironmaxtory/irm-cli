var chalk = require('chalk');
var path = require('path');
var shell = require('shelljs');
var exists = require('fs').existsSync;

/**
 * Generate a template given a `src` and `dest`.
 *
 * @param {String} name
 * @param {String} src
 * @param {String} dest
 * @param {Function} done
 */

module.exports = function generate (name, src, dest, done) {
  if(!exists(dest)){
    var destBuff = dest.slice(1).split('/');
    for(var i=0;i<destBuff.length;i++){
      var destPart = '/'+destBuff.slice(0, i+1).join('/');
      if(!exists(destPart)){
        shell.exec('mkdir '+destPart);
      }
    }
  }

  shell.exec('cp -ir '+src+'/* '+dest, function(code, stdout, stderr){
    if(code != 0){
      console.log();
      console.log(chalk.red('Error:'))
      console.log('   '+chalk.red('code: %s', code));
      console.log('   '+chalk.red('stdout: %s', stdout));
      console.log('   '+chalk.red('stderr: %s', stderr));
    }
  });
  done && done();
}
