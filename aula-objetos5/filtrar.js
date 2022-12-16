const clientesFiltrar = require ("./clientes.json")


function filtrarComplemento(clientes){

    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        )
    })
}
    
const filtrar = filtrarComplemento(clientesFiltrar)

console.log(filtrar)