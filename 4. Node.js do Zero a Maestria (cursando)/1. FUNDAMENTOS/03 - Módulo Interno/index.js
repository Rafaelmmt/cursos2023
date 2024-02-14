// MÓDULO INTERNO

const meuModulo = require('./meu_modulo')
const x  = meuModulo.mediaABC

x (2,3,4)
x (10,10,10)
x (21,30,90)


// CORE MODULES (módulos já existentes que apenas precisam ser chamados. Ex.: PATH)

const path = require('path')
const extension = path.extname('arquivo.pdf')

console.log(extension)


// LER ARGUMENTOS

    console.log(process.argv) 
    // Passar argumento no teminal => "node index.js nome=Rafael" 
    // Node retorna um array. Utilizando "slice" e "split" é possível isolar a informação desejada.
    const args = process.argv.slice(2)
    console.log(args)
    const nome = args[0].split('=')[1]

console.log(nome)

