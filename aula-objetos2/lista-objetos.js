const pessoa1 = {
    nome: "Manel",
    idade: 20,
    emprego:"MotoBoy",
    Telefone: ["61 71276172", "61 89673289"]
} 

//Adicionanado Objetos dentro de Objetos

pessoa1.enderecos = [
    {
    Cidade: "Brasilia",
    Bairro: "Santa Maria",
    Quadra: "Qr 210",
    Conjunto: "D",
    Casa: true,
    numeroDaCasa: 29,

},
]

//Adicionando Objetos na Lista de Objetos
pessoa1.enderecos.push({
    Quadra: "SQS 310",
    Conjunto: "L",
    Apartamento: true,
    Complemento: "AP 605"
})

//Método para filtrar o que deseja ser mostrado no objetos
const apenasAP = pessoa1.enderecos.filter((enderecos) => enderecos.Apartamento === true)

console.log(apenasAP)

const apenasCasa = pessoa1.enderecos.filter((enderecos) => enderecos.Casa === true)

console.log(apenasCasa)

