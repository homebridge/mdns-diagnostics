#!/usr/bin/env node

var bonjour = require('bonjour-hap')();

var browser = bonjour.find({
  type: 'hap'
}, function(result) {
  if (result.txt) {
    for (const address of result.addresses) {
      console.log("%s, %s,  %s:%s", result.name, result.txt.md, address, result.port);
    }
  } else {
    console.log("Unsupported device found, skipping", result.name);
  }
});
setTimeout(function() {
  // debug('Timeout:');
  browser.stop();
}, 20 * 1000);
