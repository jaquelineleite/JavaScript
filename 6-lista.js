console.log("Trabalhando com listas");
//const Salvador = "Salvador";
//const saoPaulo = "Sao Paulo";
//const rioDeJaneiro = " Rio de Janeiro ";


const listadeDestinos = new Array(
    "Salvador, São Paulo, Rio de Janeiro"
)
console.log ("Destinos possíveis");
console.log (listadeDestinos);
//console.log("Salvador, São Paulo, Rio de Janeiro");

listadeDestinos.push("Curitiba")//adicionando um ítem a lista
console.log("Destinos Possíveis:");
console.log (listadeDestinos);

listadeDestinos.splice(1,1); //deletando um elemento da lista posição
//2 posição 1
console.log(listadeDestinos);

listadeDestinos.splice(1,1);
console.log(listadeDestinos);

console.log(listadeDestinos[1], listadeDestinos[0]);

