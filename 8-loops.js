console.log("/nTrabalhando com Condicionais");


const listadeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("Destinos possíveis");
console.log("listadeDestinos");

const podeComprar = idadeComprador >= 18

let contador = 0
let destinoExiste = false;
while (contador <3){

    if (listadeDestinos [contador]== destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;

    }
    contador +=1;
    }

}
console.log("Destino Existe", destinoExiste);


console.log("Destinos Possíveis:");
console.log (listadeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado ==true;


let contador = 0;
let destinoExiste = false;
while(contador <3 ){
    if(listadeDestinos[contador]== destino){
        destinoExiste = true;
        break;

    }
    contador +=1;
}
console.log("Destino existe:", destinoExiste);

if (podeComprar && destinoExiste){
    console.log ("Boa Viagem");

}else{
    console.log("Desculpe tivemos um erro!");

}
for (let i = 0 ; i<3 ; i ++){
    if(listadeDestinos [i] == destino){
        destinoExiste = true;
    }
}

