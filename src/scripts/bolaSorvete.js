// primeira versão proposta 
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
  
  console.log(""); // spacers
  console.log(""); // spacers
  
  
  // funções que retornam diferentes palavras 
  // a depender do index fornecido como argumeto
  // definidas usando destructuring assigment
  const [adicionando, bolas] = [
    i => i !== 3  ? "Adicionando" : "Foram adicionadas",
    i => i > 1    ? "bolas"       : "bola"
  ];
  
  
  // forEach em array hardCoded
  [1, 2, 3].forEach(i =>
    console.log(`${adicionando(i)} ${i} ${bolas(i)} de sorvete`)
  )
  
  console.log(""); // spacers
  console.log(""); // spacers
  
  
  // forEarch em array de índices
  [...Array(3).keys()].forEach(i =>
    console.log(`${adicionando(i+1)} ${i+1} ${bolas(i+1)} de sorvete`)
  )
  
  console.log(""); // spacers
  console.log(""); // spacers
  
  
  /* Nestes exemplos, a lógica é a mesma, mas a primeira versão é mais "sofisticada" porque está 
  utilizando uma função para determinar se deve ser usado "bola" ou "bolas", e outra função para 
  determinar se deve ser exibida a mensagem "Adicionando" ou "Foram adicionadas". A segunda versão 
  utiliza o método forEach para percorrer o array de índices, e a terceira versão é ainda mais curta, 
  pois utiliza operadores ternários e spread operator para criar o array de índices.*/
  
  
  // Utilizando generators e yield:
  function* sorveteGenerator() {
    for (let i = 1; i <= 3; i++)
    yield `${adicionando(i)} ${i} ${bolas(i)} de sorvete`;
  }
  
  const addBolas = sorveteGenerator();
  console.log(addBolas.next().value);
  console.log(addBolas.next().value);
  console.log(addBolas.next().value);
  
  console.log(""); // spacers
  console.log(""); // spacers
  
  
  // Utilizando async/await e promises:
  const addSorvete = async () => {
    for (let i = 1; i <= 3; i++) {
      console.log(`${adicionando(i)} ${i} ${bolas(i)} de sorvete`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log("Foram adicionadas 3 bolas de sorvete ao total.");
  }
  
  addSorvete();
  