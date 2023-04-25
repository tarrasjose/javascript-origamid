var frase = 'JavaScript';
const regexp = /a/;
const fraseNova = frase.replace(regexp, 'o');
console.log(fraseNova);

// /a/ encontrar o primeiro a

// /a/g colocando g seleciona todos os as

// /a/i ignora as diferenças entre maiusculas e minusculas

// /[ta]/ Vai buscar todos os t ou a, estando juntos ou separados

// /./ o ponto seleciona todos caracter espaços... menos quebra de linha

// /[.]/ ou /\./ o ponto entre os colchetes ou com barra invertida antes do ponto, seleciona todos os pontos no literal

// /\;/ posso usar a barra invertida com um caracter especial para seleciona-lo

// /Bra[sz]il/g Vai selecionar tanto Brasil quanto Brazil 

// /[A-Za-z]/g Seleciona de A a Z e também de a a z

// /[A-Za-z0-9]/g posso continuar selecionando tudo, agora também incluido de 0 a 9 além das letras

//Segue a tabela unicode para selecionar, se colocarmos A-z de A maiusculo a z minusculos estará incluido também alguns caracteres
//https://unicode-table.com/en/
 
// /[^a]/g usando assim vai negar todos os pontos, selecionando todo o restante, lembrando que está negando todas as letras e não só a palavra

// /\w/g Esse seleciona qualquer caracter alfanumerico e o underline. Seria mesma coisa de fazer /[A-Za-z0-9]/

// /\d/g Esse seleciona tudo que é digito. 3433

// /\D/g O d maiusculo seleciona tudo que não for digito

// /\s/g Esse vai selecionar tudo que for espaço, quebra de linha ou tab também

// /\S/g Esse vai negar o que for espaço, quebra de linha e tab

// /[\S\s]/g Tem esse macete que seleciona tudo  que não for espaço e tudo que for espaço

// /iii/g ou /i{3}/g Seleciona quando tiver i seguido de ii

// /i{2-3}/g Seleciona de 2 ii a 3 iii, onde der pra selecionar 2 a 3 i ele vai selecionar

// /a{2,}/ Seleciona a partir de 2

// /\w{1,}/ Tudo que for alfanumerico, o que tiver acima de um ou mais caracter juntos

// /i/g Se substituir o i por x da da palavra vaiiiii ficaria assim vaxxxxx, agora no de baixo usando:
// /i+/g substituindo por x na palavra vaiiiii, ficaria vax 

// /ai/g seleciona todos ai juntos, agora usando /ai*/ usando com asterisco vai selecionar todos os a tendo i ou não e seleciona 0 ou mais i que tiver na frente do a.

// /\d/g seleciona todos os digitos, se eu quiser que os digitos comecem com traço uso este /-\d+/g. 

// /-\d*/g Esse começa por traço e pode ter ou não ter ou não numero

// /regexp?/ significa que o p é opcional, vai selecionar regexp e regex por exemplo

// /tamanho|lobos|Brasil/g Seleciona tamanho, lobos e Brasil

// /\bpropor\b/g Usando o b vai selecionar o propor e não vai selecionar o proporcionalmente por exemplo, só tem que ficar esperto, se caso tiver uma letra com acento depois de propor, ele vai selecionar porque essa letra com acento não é w-alfanumeria ou _

// const regexpDigito = /\B\d+\B/gi; Se tiver entre alfanumericos ele consegue selecionar
// '11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X');
// 1X_X2 33-44 55é66 7XeX8
 

const regexp2 = /[-.]/g;
const numero = '111.222-333-44';
const novoTeste = numero.replace(regexp2, '');
console.log(novoTeste);

const regexp3 = /^\w+/g //selecionou a primeira palavra andre
const regexp4 = /\w+$/gm // Selecionou a ultima palavra o com e se colocar depois do g o m seleciona nas duas linhas

const teste = `andreg@origamid.com
contato@origamid.com`.replace(regexp3, 'X');
console.log(teste);

const teste2 = `andreg@origamid.com
contato@origamid.com`.replace(regexp4, 'X');
console.log(teste2);

// /\n/g seleciona tipo a quebra de linha, aquele sinal de enter.

// UNICODE \U
// O \u irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.

// Procura: @ ou ©
const regexp5 = /\u0040|\u00A9/g;

const teste3 = 'andre@origamid.com ©'.replace(regexp5, '---');
// andre---origamid.com ---
console.log(teste3);

///////////////////////////////
//Substituição

// /JavaScript$&/ Vai colocar antes do que foi selecionado colocando Javascript

// /\n$&/ Vai pular a linha depois do que foi selecionado 

// /(\w+)@[\w.]+/gi //Esse Seleciona todo o email e os parentes cria um grupo de captura, que posso mudar a partir dele
// andre@origamid.com
//$1@gmail.com  que ficaria assim: andre@gmail.com substituindo origamid.com

// /(\w+)@([\w.]+)/gi aqui usando parentes em dois grupos de captura posso optar pelo 1 ou pelo 2 grupo $2.
//andre@origamid.com
//contato@$2 usando este contato substituiria andre assim: contato@origamid.com

// /(\w+),\s(\w+)/gi captura os primeiros alfanumerico em um grupo de captura, virgula, \s que significa espaço e mais um grupo de captura alfanumerico

// Rafael, Andre
// Souza, Tarras

// ai podemos usar replace 
// $2 $1 dizendo que vai começar pelo grupo 2 e depois grupo 1

// Andre Rafael
// Tarras Souza


// /\d(?=em)/gi
// 2em, 4px, 5%, 5px, 1px
// ali seleciona o digito e usando (?=em) seleciona somente o que tiver 'em' na frente, no caso só poderia substituir 2 do 2em

// /\d(?!em)/gi Existe também este que ao inves de usar o igual coloca ! que é negação, dizendo quero selecionar o que não tiver na frente em, então selecionará todos os outros que tem px % na frente, podendo então substituir o numero deles
// 2em, 4px, 5%, 5px, 1px


//////////////////////////////////////
//padroes

//padrao para cep
// /\d{5}[\s-]?\d{3}/g 
//\d{5}esse os cincos primeiros digitos
//[\s-]? esse \s espaço ou - e o ? que é opcional para selecionar caso não tenha espaço ou traço também e no final \d{3} tem digitos

//cep
//00000-000
//00000 000
//00000000

const regexpCEP = /\d{5}[\s-]?\d{3}/g;

const ceps = [
  '00000-000',
  '00000 000',
  '00000000'
];

for(cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}

//padroes CPF

// /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g
// só que para simplificar podemos fazer assim:
// /(?:\d{3}[.-]?){3}\d{2}/g
//esse ?: significa que não quer grupos, coloca entre parenteses junto com o que queremos repetir 3 vezes usando {3} e no final \d{2}/g para encerrar os ultimos dois digitos

// 000.000.000-00
// 000-000-000-00
// 000.000.000.00
// 000000000-00
// 00000000000

//Uma coisa de regexp sempre pode acontecer de um caso especificio que não vai conseguir pegar, algo que fuja, o que o professor está tentando é algo que pega 99,9% dos casos

// /\d{2}[.-]?(?:\d{3}[.-]?){2}\/?\d{4}[-.]?\d{2}/g

// \/? escapar barra

// 00.000.000/0000-00
// 00000000000000
// 00-000-000-0000-00
// 00.000.000/000000
// 00.000.000.000000
// 00.000.000.0000.00


/////////////////////////
//telefone

// /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g

// +55 11 98888-8888
// +55 11 98888 8888
// +55 11 988888888
// +55 11988888888
// +5511988888888
// 5511988888888
// 11 98888-8888
// 11 98888 8888
// (11) 98888 8888
// (11) 98888-8888
// 11-98888-8888
// 11 98888 8888
// 11988888888
// 11988888888
// 988888888
// (11)988888888
// 98888 8888
// 8888 8888


/////////////////////
//email

// /[\w.-]+@[\w-]+\.[\w.-]+/gi

// email@email.com
// email@email.com.org
// email-email@email.com
// email_email@email.com
// email.email23@email.com.br
// email.email23@empresa-sua.com.br
// c@contato.cc
// gian__calixto@hotmail.com


///////////////////////////
//Selecionando tags completa

// /\/?[\w\s="']+\/?>/gi

/* <div>Isso é uma div</div>
<div class="ativa">Essa está ativa</div>
<img src="imagem" />
<img src="imagem">
<ul class="ativa">
  <li>Essa está ativa</li>
</ul> */


/////////////////////////////
//Selecionando somente o nome das tags

// /(?<=<\/?)[\w]+/gi

/* <div>Isso é uma div</div>
<div class="ativa">Essa está ativa</div>
<img src="imagem" />
<img src="imagem">
<ul class="ativa">
  <li>Essa está ativa</li>
</ul> */