// Привет! По поводу этой задачи есть вопросы, 
//если не решается код и выдает ошибку используй, пожалуйста,
// fs.rm вместо fs.rmdir!!!


const fs = require('fs');
const path = require('path');

fs.rmdir(path.join(__dirname, 'files-copy'), {recursive: true, force: true}, err => {
    if (err) throw err;
    copyDir();
});

function copyDir() {
    fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, err => {
        if (err) throw err;
    });
    fs.readdir(path.join(__dirname, 'files'), {withFileTypes: true}, (err, data) => {
        if (err) throw err;
        data.forEach(file => {
            fs.copyFile(path.join(__dirname, 'files', file.name), 
                        path.join(__dirname, 'files-copy', file.name), err => {
                        if (err) throw err;
                            console.log(file.name)
                        })
        })
    
    })
}