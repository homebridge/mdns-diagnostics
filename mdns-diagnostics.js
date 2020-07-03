#!/usr/bin/env node

const os = require("os");

console.log("--------------------");
console.log("Platform: " + os.platform());
console.log("Version: " + os.version());
console.log("Network information:");

const ifaces = os.networkInterfaces();
for (const [name, infos] of Object.entries(ifaces)) {
  ifaces[name] = infos.map(info => {
    let type = "uIp";
    if (info.family === "IPv4") {
      type = "ipv4";
    } else if (info.family === "IPv6") {
      if (info.scopeid) {
        type = "ipv6";
      } else if (info.scopeid === 0) {
        type = "routableIpv6";
      }
    }

    return `${type}: ${info.cidr}`;
  });
}

console.log(JSON.stringify(ifaces, null, 2));

console.log("--------------------");

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
  console.log("--------------------");
  process.exit(0);
}, 20 * 1000);
