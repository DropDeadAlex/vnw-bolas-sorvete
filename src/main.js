import './style.css'


for (let i = 1; i <= 3; i++) {
  i !== 3
    ? console.log(`Adicionando ${i} bola(s) de sorvete`)
    : console.log(`Foram adicionadas ${i} bolas de sorvete`)
}
// primeira versão proposta 

console.log(""); // spacers
console.log(""); // spacers


for (let i = 1; i <= 3; i++) 
  console.log(`${i !== 3 ? 'Adicionando' : 'Foram adicionadas'} ${i} bola(s) de sorvete`);

console.log(""); // spacers
console.log(""); // spacers


// funções que retornam diferentes palavras 
// a depender do index fornecido
const adicionando = i => i !== 3 ? "Adicionando" : "Foram Adicionadas"
const bolas = i => i > 1 ? "bolas" : "bola"


for (let i = 1; i <= 3; i++)
  console.log(`${adicionando(i)} ${i} ${bolas(i)} de sorvete`);

console.log(""); // spacers
console.log(""); // spacers


[1, 2, 3].forEach(i =>
  console.log(`${adicionando(i)} ${i} ${bolas(i)} de sorvete`)
)

console.log(""); // spacers
console.log(""); // spacers

/* Nestes exemplos, a lógica é a mesma, mas a primeira versão é mais "sofisticada" porque está 
utilizando uma função para determinar se deve ser usado "bola" ou "bolas", e outra função para 
determinar se deve ser exibida a mensagem "Adicionando" ou "Foram adicionadas". A segunda versão 
utiliza o método forEach para percorrer o array de índices, e a terceira versão é ainda mais curta, 
pois utiliza operadores ternários e spread operator para criar o array de índices.*/


