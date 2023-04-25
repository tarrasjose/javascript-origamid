const regexp = /\w+/gi;

const frase = 'JavaScript Linguagem 101';

console.log(frase.replace(regexp, 'x'));

// flags
console.log(regexp.flags);
console.log('g', regexp.global);
console.log('i', regexp.ignoreCase);
console.log('multiline', regexp.multiline);
console.log(regexp.source);

/////////////////////////// outro jeito

const regexp1 = new RegExp('\\w+', 'gi');

const frase1 = 'Pyton linguagem 102'

console.log(frase1.replace(regexp1, 'x'));


//////////////////////////
const regexp2 = /Java/gi;
const frase2 = 'JavaScript e Java Liguagem 101 Java';
//.test funciona como um loop
console.log(regexp2.test(frase2)); //achou java do JavaScript
console.log(regexp2.lastIndex); //4 achou e parou no 4
console.log(regexp2.test(frase2)); //17 até o final da palavra java contando com espaços
console.log(regexp2.lastIndex);
console.log(regexp2.test(frase2));
console.log(regexp2.lastIndex); //0 porque ele deu false, não encontrou mais nenhum
console.log(regexp2.test(frase2));
console.log(regexp2.lastIndex); //4 recomeça

let i = 0;
while(regexp2.test(frase2)){
  console.log(regexp2.lastIndex, i++);
}


////////////////////////////////////
const frase3 = 'JavaScript, TypeScript, CoffeeScript, Java';

const regexp3 = /\w+/g;

// console.log(regexp3.exec(frase3));
// console.log(regexp3.exec(frase3));
// console.log(regexp3.exec(frase3));
// console.log(regexp3.exec(frase3));

let regexp3Result;
while((regexp3Result = regexp3.exec(frase3)) !== null) {
  console.log(regexp3Result);
  console.log(regexp3Result[0]); //acessando o primeiro item que é a captura
}

///////////// pegar o resultado da Frase
const regexp4 = /Script/g;
const Frase = 'JavaScript, TypeScript, CoffeeScript, Java';

const resultado = Frase.match(regexp3);
console.log(resultado);

const resultado2 = Frase.split(regexp4);
console.log(resultado2);


///////////////////////
// STR.SPLIT()
// O split serve para distribuirmos uma string em uma array, quebrando a string no argumento que for passado. Este método irá remover o match da array final.

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp5 = /ul/g;

const resultado3 = tags.replace(regexp5, 'div');
console.log(resultado3);

////////////////////

const tags2 = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp6 = /(?<=<\/?)\w+/g;
//começa com < pode ter \/? ou não + \w+

const resultado4 = tags.replace(regexp6, 'div');
console.log(resultado4);
  


////////////////////////////
const tags3 = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp7 = /<li/g;

const resultado5 = tags.replace(regexp7, '$& class="ativa"');
//$& captura no regexp7 li com abertura

console.log(resultado5);

//////////////////////////////

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const regexp8 = /(\w+@)[\w.]+/g
//separou o grupo de captura(\w+@) e usa $1 e coloca gmail.com
const resultado6 = emails.replace(regexp8, '$1gmail.com')
console.log(resultado6);

/////////////////////////////////


const emails2 = `
joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
`;

const regexp9 = /(\w+@)([\w.]+)/g
//separou o grupo de captura(\w+@) e usa $1 e coloca gmail.com
const resultado7 = emails2.replace(regexp9, function(...args) {
  console.log(args[1]);
  console.log(args[2]);
  if(args[2] === 'homail.com.br') {
    return args[1] + 'hotmail.com.br'
  } else if(args[2] === 'ggmail.com.br') {
    return args[1] + 'gmail.com.br'
  } else if(args[2] === 'oulook.com.br') {
    return args[1] + 'outlook.com.br'
  } else {
    return args[0]
  }
  
});
console.log(resultado7);