const fs = require('fs');
const path = require('path');

const findPath = path.join(__dirname, 'secret-folder');
fs.readdir(findPath, {withFileTypes: true}, (err, data) => {
    if (err) throw error;
    data.forEach(file => {
        if (file.isFile()) {
            const fileExt = path.extname(file.name);
            const fileName = path.basename(file.name);
            const fileStats = path.join(__dirname, 'secret-folder', file.name)
            fs.stat(fileStats, (err, stats) => {
                if (err) throw error;
                console.log(`${fileName.replace(fileExt, '')} - ${fileExt.replace('.', '')} - ${stats.size / 1000}kb`)
            })
        }
    })
})
