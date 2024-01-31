// Aula 01 - "Hello Worl"
console.log('Hello World Node!')

// Aula 02 - Utilizando Módulos (file system)
const fs = require('fs')

fs.readFile('texto.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})