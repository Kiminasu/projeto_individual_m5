const rls = require('readline-sync')
const ck = require('chalk')

const cmdCss = []
let input = ""

while(input != "sair")
{
    cmdCss.push(input)
    input = rls.question(ck.yellow("Digite uma propriedade CSS")).toLocaleLowerCase()
}
console.log(ck.green(cmdCss.sort().join("\n")))
console.log(ck.bgWhiteBright.black('Obrigado por utilizar o app produzido por Lucas Queiroz!')) 