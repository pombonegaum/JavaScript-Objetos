let lista = [1,2,3,4,5];
let i = 0;

for (let i = 0; i < lista.length; i += 1){
    console.log(i);
}


function voltaZero(){

    if (i > 5){

        console.log('variável maior que 5')
    } else{
        console.log('não é maior que 5')
    }
}

voltaZero();