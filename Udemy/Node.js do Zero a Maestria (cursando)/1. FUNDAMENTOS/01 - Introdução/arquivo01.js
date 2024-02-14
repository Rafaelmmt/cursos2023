// Aula 01 - "Hello World"
console.log('Hello World Node!')

// Aula 02 - Utilizando Módulos (File System)
const fs = require('fs')

fs.readFile('texto.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})
