//João esta criando uma aplicação para calcular o IR a partir do
//salário. Ele olhou na tabela de IRPF e implementou as regras para
//15% e implementou as regras para para 15% e 22%

const salario = 3300.00;

if(salario < 2600.00) {
    console.log ("A sua aliquota é de 15%");
    console.log ("Você pode deduzir até R$350");
}


if (salario < 3750.0){
console.log("A sua aliquota é de 22,5%");
console.log("Você pode deuzir até R$ 636");
}



