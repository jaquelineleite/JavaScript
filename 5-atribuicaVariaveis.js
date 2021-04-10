console.log ("Trabalhando com atribuição de Variáveis");

let primeironome = ("Jaqueline")
//usa se o let porque a variavel não é constante então o nome
//pode mudar
const sobrenome = ("Bonita")

console.log(primeironome);
console.log(sobrenome);
console.log(primeironome + " " + sobrenome);
console.log(primeironome, sobrenome);

console.log(`Meu nome é ${primeironome} ${sobrenome}` );

primeironome = primeironome + sobrenome;
//aqui ele não vai dar espaço porque é uma atribuição simples

console.log (primeironome);
//mudança de estado na programação é difícil de debugar porém
//não é uma boa prática. O ideal é evitar.

let contador = 0
contador = contador + 1;
const nomeCompleto = primeironome + sobrenome;
console.log(nomeCompleto);


let idade; //declarando variavel
idade = 33; //atribuindo valor
idade = idade + 1;
console.log(idade);

