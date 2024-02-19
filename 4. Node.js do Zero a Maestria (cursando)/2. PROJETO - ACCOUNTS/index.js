// MÓDULOS EXTERNOS
const inquirer = require('inquirer')
const chalk = require('chalk')

// MÓDULOS INTERNOS
const fs = require('fs')

// Chamar função inicializando o programa
operation()

// Utilizando o INQUIRER para gerar as opções do usuário e receber resposta 
function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message:'O que você deseja fazer?',
        choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
    }])
    .then((answer) => {
        const action = answer['action']
        
        if(action === 'Criar Conta') {
            createAccount()
        } else if(action === 'Consultar Saldo') {
            checkBalance()
        } else if(action === 'Depositar') {
            deposit()
        } else if(action === 'Sacar') {
            retrive()
        } else if(action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
            process.exit()
        }
    })
}

// Função "Criar Conta"
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir:'))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Digite um nome para sua conta:'
    }])
    .then((answer) => {
        const accountName = answer['accountName']
        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }
 
        if(fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err) {console.log(err)})

        console.log(chalk.green('Parabéns sua conta foi criada com sucesso!'))
        operation()
    
    })
}

// Função "Consultar Saldo"
function checkBalance() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?',
    }])
    .then((answer) => {
        const accountName = answer['accountName']
  
        if (!checkAccount(accountName)) {
          return checkBalance()
        }
  
        const accountData = getAccount(accountName)
  
        console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é de R$${accountData.balance}.`))
        operation()
    })
}

// Função "Depositar"
function deposit() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?'
    }])
    .then((answer) => {
        const accountName = answer['accountName']
  
        if (!checkAccount(accountName)) {
          return deposit()
        }
  
        inquirer.prompt([{
            name: 'amount',
            message: 'Quanto você deseja depositar?'
        }])
        .then((answer) => {
            const amount = answer['amount']
  
            addAmount(accountName, amount)
            operation()
        })
    })
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
      console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
      return false
    }
    return true
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
      encoding: 'utf8',
      flag: 'r'
    })

    return JSON.parse(accountJSON)
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)
  
    if (!amount) {
      console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
      return deposit()
    }
  
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
  
    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), function (err) {console.log(err)})
  
    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`))
}

// Função "Sacar"
function retrive() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta?',
    }])
    .then((answer) => {
        const accountName = answer['accountName']
  
        if (!checkAccount(accountName)) {
            return retrive()
        }
  
        inquirer.prompt([{
            name: 'amount',
            message: 'Quanto você deseja sacar?'
        }])
        .then((answer) => {
            const amount = answer['amount']
  
            removeAmount(accountName, amount)
            operation()
        })
    })
}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName)
  
    if (!amount) {
      console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
      return withdraw()
    }
  
    if (accountData.balance < amount) {
      console.log(chalk.bgRed.black('Valor indisponível!'))
      return withdraw()
    }
  
    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)
  
    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), function (err) {console.log(err)})
  
    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`))
}
