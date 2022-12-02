const pessoa = {
   nome: "Andressa",
   emprego: "atendente de farmácia"
}

//Atribuindo Valores ao Objeto
pessoa.telefone = "61 981074399"

console.log(pessoa.telefone)

 //Alterando Valores do Objeto
pessoa.nome = "Andressa Karolayne"

console.log(pessoa)

//Formas de Deletar chave/valores de objetos

delete pessoa.telefone

delete pessoa["emprego"]