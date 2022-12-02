const pessoa1 = {
    nome: "Manel",
    idade: 20,
    emprego:"MotoBoy",
    Telefone: ["61 71276172", "61 89673289"]
} 

//Adicionanado Objetos dentro de Objetos
pessoa1.endereco = {
    Cidade: "Brasilia",
    Bairro: "Santa Maria",
    Quadra: "Qr 210",
    Conjunto: "D",
    Casa: true,
    numeroDaCasa: 29,

}

for (let chave in pessoa1){
    let tipo = typeof pessoa1[chave]
    if (tipo !== "object" && tipo !== "function"){

        console.log(`A chave ${chave}, tem o valor de ${pessoa1[chave]}`)
    }
}