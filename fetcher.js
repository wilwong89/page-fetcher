const arg = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

if (arg[0] && typeof arg[0] === 'string') {
  request(arg[0], (error, response, body) => {
    if (arg[1] && typeof arg[1] === 'string') {
      fs.writeFile(arg[1], body, (error) => {
        if (error) console.log("Fetch failed");
        else console.log(`Downloaded and saved ${body.length} bytes to ${arg[1]}`);
      });
    }
  });
}
