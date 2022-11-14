const dns = require('node:dns');

dns.lookup('sapo.pt', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
