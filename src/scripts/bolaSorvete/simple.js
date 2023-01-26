// primeira versão proposta. Implementaçâo se sintaxe ternária com quebra de linha 
for (let i = 1; i <= 3; i++) {
  i !== 3
    ? console.log(`Adicionando ${i} bola(s) de sorvete`)
    : console.log(`Foram adicionadas ${i} bolas de sorvete`)
}

console.log(""); // spacers
console.log(""); // spacers


// ternario dentro da templateString, uma linha
for (let i = 1; i <= 3; i++)
  console.log(`${i !== 3 ? 'Adicionando' : 'Foram adicionadas'} ${i} bola(s) de sorvete`)
