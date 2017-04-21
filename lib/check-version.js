var request = require('request')
var semver = require('semver')
var chalk = require('chalk')
var packageConfig = require('../package.json')

module.exports = function (done) {
  // Ensure minimum supported node version is used
  if (!semver.satisfies(process.version, packageConfig.engines.node)) {
    return console.log(chalk.red(
      '  You must upgrade node to >='
        + ((packageConfig.engines.node.indexOf('>=')===0)?(packageConfig.engines.node.slice(2)):packageConfig.engines.node)
        + '.x to use irm-cli'
    ))
  }

  request({
    url: 'https://registry.npmjs.org/irm-cli',
    timeout: 1000
  }, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      var latestVersion = JSON.parse(body)['dist-tags'].latest;
      var localVersion = packageConfig.version;
      if (semver.lt(localVersion, latestVersion)) {
        console.log(chalk.yellow('  A newer version of irm-cli is available.'))
        console.log()
        console.log('  latest:    ' + chalk.green(latestVersion))
        console.log('  installed: ' + chalk.red(localVersion))
        console.log()
      }
    }
    done()
  })
}
