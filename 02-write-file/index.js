const fs = require('fs');
const path = require('path');
const { stdout, stdin } = process;

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));
stdout.write('Введите, пожалуйста, текст:\n');
stdin.on('data', data => { 
    if (data.toString().trim() === 'exit') {
        console.log('\nGoodbye!');
        process.exit();
    } else {
        output.write(data);
    }
});
process.on('SIGINT', () => {
    console.log('\nGoodbye!');
    process.exit();
})
