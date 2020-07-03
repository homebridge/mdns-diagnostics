# mdns-diagnostics

This is a test tool to display homebridge / hap-node-js instances on your network to investigate potential addressing issues causing device not responding issues.

# Installation

`sudo npm install -g mdns-diagnostics`

# Running

mdns-diagnostics

# output should look like this

```
$ mdns-diagnostics
--------------------
Platform: darwin
Version: Darwin Kernel Version 19.5.0: Tue May 26 20:41:44 PDT 2020; root:xnu-6153.121.2~2/RELEASE_X86_64
Network information:
{
  "lo0": [
    "ipv4: 127.0.0.1/8",
    "routableIpv6: ::1/128",
    "ipv6: fe80::1/64"
  ],
  "en0": [
    "ipv6: fe80::1ff:fe23:4567:890a/64",
    "ipv4: 192.168.1.34/24",
    "routableIpv6: 2001:db8:85a3::8a2e:370:7334/64"
  ]
}
--------------------
Leonard-Dev E1BD, Leonard-Dev,  192.168.1.51:51828
Howard-Hue 6E78, Howard-Hue,  192.168.1.51:51827
Howard 56F2, Howard,  192.168.1.71:51826
homeATV 0A52, homeATV,  192.168.1.71:51827
Howard-old-595E, Howard-old,  192.168.1.54:51826
Driveway DDE6, Driveway,  192.168.1.72:46855
Front Porch 6EAB, Front Porch,  192.168.1.72:44707
Sheldon-NodeRed-1033, Sheldon-NodeRed,  192.168.1.72:51831
Sheldon-Camera DAFC, Sheldon-Camera,  192.168.1.72:51825
Walter-NodeRed-Channel-A188, Walter-NodeRed-Channel,  192.168.1.72:51840
sheldon-megan 1692, sheldon-megan,  192.168.1.51:51833
Leonard-NodeRed-1C5E, Leonard-NodeRed,  192.168.1.71:51831
Leonard-Amazon 035D, Leonard-Amazon,  192.168.1.51:51829
--------------------
```
