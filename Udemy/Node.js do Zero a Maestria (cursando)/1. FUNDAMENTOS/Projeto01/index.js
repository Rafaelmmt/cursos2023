// PROJETO 01
// 1. Crie um novo projeto que aceite pacotes externos;
// 2. Instale o INQUIRER e o CHALK;
// 3. Utilize o INQUIRER para receber nome e a idade do usuário;
// 4. Apresente esta resposta com uma cor de fundo amarela e texto preto;
// 5. Insira um tratamento para um possível erro. 

const chalk = require('chalk')
const inquirer = require('inquirer')


inquirer
    .prompt([
        {name: 'nome', message: 'Qual o seu nome?'},
        {name: 'idade', message: 'Qual a sua idade?'}
    ])
    .then((answers) => {

        const resposta = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos.` 
        console.log(chalk.bgYellow.black(resposta))

    })
.catch((err) => console.log(err))

