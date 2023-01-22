const [adicionando, bolas] = [
    i => i !== 3  ? "Adicionando" : "Foram adicionadas",
    i => i > 1    ? "bolas"       : "bola"
  ];
  

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
  