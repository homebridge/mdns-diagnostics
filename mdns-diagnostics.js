// var debug = require('debug')('hapNodeJSClient');
var bonjour = require('bonjour-hap')();

var browser = bonjour.find({
  type: 'hap'
}, function(result) {
  if (result.txt) {
    for (const address of result.addresses) {
      console.log(result.name, result.txt.md, address, result.port);
    }
  } else {
    console.log("Unsupported device found, skipping", result.name);
  }
});
setTimeout(function() {
  // debug('Timeout:');
  browser.stop();
}, 20 * 1000);
