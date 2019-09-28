/* nodejs application */
/* for internet connection with out browser */

const http = require('http');
const querystring = require('querystring');

var authInfo = querystring.stringify({
  'DDDDD' : 'XXX', //Fill in the actual account here!!!
  'upass' : 'XXX', //Fill in the actual password here!!!
  '0MKKey' : 'OK'
});
var keepAliveAgent = new http.Agent({keepAlive: true});
var options = {
    host: 'XXX.XXX.XXX.XXX', //Fill in the URL of the login page here!!!
    method: 'POST',
    agent: keepAliveAgent,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(authInfo)
      }
    };
var req = http.request(options, (res) => {
  //console.log(`STATUS: ${res.statusCode}`);
  //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    //console.log(`BODY: ${chunk}`);
    console.log(`LogIn SuccessFully!`)
  });
  res.on('end', () => {
    //console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});


req.write(authInfo);
req.end();
