const clientes = require ("./clientes.json")

function ordenarObjeto(lista,propriedade){

    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]){
            return -1;
        }
        if (a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    })

        return resultado;
}


const ordernarAlfabeto = ordenarObjeto(clientes, "nome")

console.log(ordernarAlfabeto)