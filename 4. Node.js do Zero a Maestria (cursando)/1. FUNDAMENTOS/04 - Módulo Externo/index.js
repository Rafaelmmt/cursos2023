// Utilize o comando "npm init" no terminal para criar o projeto (gera o arquivo package.json)

// Utilize o comando "install" para instalar os módulos
// Ex.: npm install minimist (módulo externo que auxilia na leitura de argumentos passados no terminal)  


// Utilizando REQUIRE as funcionalidades do módulo ficam disponíveis na aplicação

const minimist = require('minimist')


// Passar argumento no teminal => "node index.js --nome=Rafael" 
// As funcionalidades do módulo instalado facilitam a aquisição da informação desejada 

const args = minimist(process.argv.slice(2))
const nome = args['nome']

console.log(nome)
