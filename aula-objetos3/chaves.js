const pessoa1 = {
    nome: "Manel",
    idade: 20,
    emprego:"MotoBoy",
    Telefone: ["61 71276172", "61 89673289"]
} 

//Adicionanado Objetos dentro de Objetos
pessoa1.enderecos = {
    Cidade: "Brasilia",
    Bairro: "Santa Maria",
    Quadra: "Qr 210",
    Conjunto: "D",
    Casa: true,
    numeroDaCasa: 29,

}

                       //Função usada para retornar as chaves do objeto em array
const chavesDoObjeto = Object.keys(pessoa1)

console.log(chavesDoObjeto)


                    //Método de array para ver se algo está incluso na array
if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado")
}