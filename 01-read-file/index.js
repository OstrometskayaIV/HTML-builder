const fs = require('fs');
const path = require('path');
const readableStream = fs.createReadStream(path.join(__dirname, 'text.txt'));
let data = '';
readableStream.on('data', chunk => console.log(data += chunk));