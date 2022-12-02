//Função dentro do Objeto
//Simulação de função de compra 

const pessoa1 = {
    nome: "Manel",
    idade: 20,
    email: "Manel@gmai.com",
    Telefone: ["61 71276172", "61 89673289"],
    Saldo: 200,
    efetuaPagamento: function(valor){
        if (valor > this.Saldo){
            console.log('Saldo Insuficiente')
        }
        else {
            this.Saldo -= valor
            console.log(`Pagamento realizado com sucesso, Novo saldo: ${this.Saldo}`)
        }
    }
} 

pessoa1.efetuaPagamento(250)