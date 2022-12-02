const erick = {
    nome: "Erick",
    idade: 19,
    cpf: "08030205112",
    email: "smurfvermelho123@gmail.com"

}

         //o "." para exibir a propriedade desejada
console.log(`O nome do cliente é ${erick.nome} e essa pessoa tem ${erick.idade} anos`)

console.log(`Os três primeiros digitos do cpf dessa pessoa são ${erick.cpf.substring(0,3)}`)