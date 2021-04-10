console.log("Trabalhando com Condicionais");


const listadeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 18;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log("Destinos Possíveis:");
console.log (listadeDestinos);

//if(idadeComprador >= 18) {
//   console.log("Comprador maior de Idade");
//    listadeDestinos.splice(1, 1); //removendo um item da lista

//} else if (estaAcompanhado == true){
//    console.log("Comprador esta acompanhado");
//    listadeDestinos.splice(1, 1); //removendo item
//}

// else{
//  console.log("Não é maior de idade e não posso vender");
//}


if (idadeComprador >= 18 || estaAcompanhado== true){
console.log("Boa Viagem");
listadeDestinos.splice(2, 1);// removendo item
} else {
     console.log("Não é maior de idade não posso vender");
}

console.log("Embarque: \n\n");
if (idadeComprador >=18 && temPassagemComprada) {
    console.log("Boa viagem");

} else{
    console.log("Você não pode embarcar");
}

console.log(listadeDestinos);

//console.log (idadeComprador > 18);
//console.log (idadeComprador < 18);
//console.log (idadeComprador <= 18);
//console.log (idadeComprador >=18);
//console.log (idadeComprador ==18);