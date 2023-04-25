const cpfsList = document.querySelectorAll('.cpf li');
console.log(cpfsList);

//////////////////////////////////////////
// uma forma de transformar nodelist em array seria essa usando array from
// function puxarInnerText(elements) {
//   const arrayElements = Array.from(elements);
//   return arrayElements.map(element => {
//     return element.innerText;
//   });
// }

// console.log(puxarInnerText(cpfs));

//////////////////////////////////////////
// outra forma de transformar nodelist em array seria usando destruturar

// const arrayCpfs = [...cpfs];
// console.log(arrayCpfs);

// const cpfInnerText = arrayCpfs.map(cpf => {
//   return cpf.innerText;  
// })

// console.log(cpfInnerText);

////////////////////////////////
//Vamos fazer assim então

const puxarInnerText = ([...elements]) => {
  return elements.map(element => {
    return element.innerText;
  })
}

console.log(puxarInnerText(cpfsList));

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
  // d minusculo tudo que for digito, D maiusculo tudo que não for digito
}
console.log(limparCPF('123.444.555-55'));

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

console.log(construirCPF('12023333344'));

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}
// const resultado = puxarInnerText(cpfs);
// console.log(formatarCPFS(resultado));

const substituirCPFS = (cpfsElements) => {
  const cpfs = puxarInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);
  console.log(cpfsFormatados);

  cpfsElements.forEach((element, index) => {
    //falar com cada li usando element
    element.innerText = cpfsFormatados[index]
  })
}
substituirCPFS(cpfsList)