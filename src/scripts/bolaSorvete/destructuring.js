// funções que retornam diferentes palavras 
// a depender do index fornecido como argumeto
// definidas usando destructuring assigment
const [adicionando, bolas] = [
  i => i !== 3  ? "Adicionando" : "Foram adicionadas",
  i => i > 1    ? "bolas"       : "bola"
];


// for...of em array hardCoded
for (const i of [1, 2, 3])
  console.log(`${adicionando(i)} ${i} ${bolas(i)} de sorvete`)

console.log(""); // spacers
console.log(""); // spacers
console.log("[...Array(3).keys()]"); // spacers


// map() e forEarch() em array de índices
[...Array(3).keys()].map(i => i + 1).forEach(i =>
  console.log(`${adicionando(i)} ${i} ${bolas(i)} de sorvete`)
)


/* Nestes exemplos, a lógica é a mesma, mas a primeira versão é mais "sofisticada" 
porque está utilizando uma função para determinar se deve ser usado "bola" ou "bolas", 
e outra função para determinar se deve ser exibida a mensagem "Adicionando" ou "Foram 
adicionadas". A segunda versão utiliza o método forEach para percorrer o array de 
índices, e a terceira versão é ainda mais curta, pois utiliza operadores ternários e 
spread operator para criar o array de índices. */ 

// comentários do bloco acima, por: ChaptGPT
