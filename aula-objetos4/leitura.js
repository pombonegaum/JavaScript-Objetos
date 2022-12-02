//Iniciando Em JSON

            //Comando para importar dados de outro diretório
const dados = require("./cliente.json")

console.log(dados)

console.log(typeof dados)

                         //Comando JSON para transformar Objeto em string               
const clienteString = JSON.stringify(dados)

console.log(clienteString)

                            //Comando JSON para retornar de volta para Objeto
const clienteRetornaObjeto = JSON.parse(clienteString)

console.log(clienteRetornaObjeto)