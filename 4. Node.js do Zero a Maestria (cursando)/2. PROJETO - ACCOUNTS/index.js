// MÓDULOS EXTERNOS
const inquirer = require('inquirer')
const chalk = require('chalk')

// MÓDULOS INTERNOS
const fs = require('fs')

// Utilizando o INQUIRER para gerar as opções do usuário e receber escolha 
function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message:'O que você deseja fazer?',
        choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
    }])
    .then((answer) => {
        const action = answer['action']
        console.log(action)
    })
    .catch((err) => console.log(err))
}



// Chamar função inicializando o programa
operation()