console.log("Conversão de Tipos");

console.log("ano" + 2020);
console.log("2" + "2");
//aqui ele não vai somar irá aparecer apenas o número 2

console.log(parseInt("2") + parseInt ("2"));
//aqui ele faz uma soma entre as duas usando Parse
//chama-se conversão explicita

console.log("10" / "2");
//aqui não precisa usar o Parse Int porque ele automaticamente faz a
//Conversão

console.log("Ricardo" / "2");
//not a number. Ele retorna como NAM

console.log("2");
//Aqui ele retorna o número porém ele le como texto

console.log(6.5);
//aqui ele imprime certo

console.log(6,5);
//aqui não vai aparecer a vírgula pois ele enetende apenas o ponto
//como virgula e a vírgula trata -se de um caractere especial
