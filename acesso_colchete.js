const erick = {
    nome: "Erick",
    idade: 19,
    cpf: "08030205112",
    email: "smurfvermelho123@gmail.com"

}

//Outra forma de acessar as propriedades do objeto usando os "[]"

console.log(`O nome do cliente é ${erick["nome"]} e essa pessoa tem ${erick["idade"]} anos`)

const chave = ["nome","idade","cpf","email"]

chave.forEach((chave) => {
  console.log (`A chave ${chave} tem o valor de ${erick[chave]}`
)})
