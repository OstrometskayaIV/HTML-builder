const fs = require('fs');
const path = require('path');
const bundlePath = path.join(__dirname, 'project-dist/bundle.css');
const output = fs.createWriteStream(bundlePath);

const stylesPath = path.join(__dirname, 'styles');
fs.readdir(stylesPath, {withFileTypes: true}, (err, data) => {
    if (err) throw err;
    data.forEach(file => {
        const filesPath = path.join(stylesPath, file.name);
        const fileExt = path.parse(filesPath);

        if (file.isFile() && fileExt.ext === '.css') {
            const input = fs.createReadStream(filesPath);
            input.pipe(output);
        }
    })
})