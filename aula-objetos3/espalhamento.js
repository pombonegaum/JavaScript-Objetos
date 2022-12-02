const pessoa1 = {
    nome: "Manel",
    idade: 20,
    emprego:"MotoBoy",
    Telefone: ["61 71276172", "61 89673289"]
} 

//Adicionanado Objetos dentro de Objetos
pessoa1.enderecos = [{
    Cidade: "Brasilia",
    Bairro: "Santa Maria",
    Quadra: "Qr 210",
    Conjunto: "D",
    Casa: true,
    numeroDaCasa: 29,

},{
    Cidade: "Brasília",
    Bairro: "Asa Sul",
    Apartamento: true,
    Bloco: "A",
    Complento: "Ap 304"
}
]

const encomenda = {
    Destinatário: pessoa1.nome,
    //Sintaxe de espalhamento
    ...pessoa1.enderecos[0]
    
}

console.log(encomenda)


const ligandoParaCliente = function(telefoneComercial,telefonePessoal){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefonePessoal}`)
}

        //Sintaxe de espalhamento
console.log(...pessoa1.Telefone)

//Comentário