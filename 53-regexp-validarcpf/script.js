import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf).iniciar()

// console.log(validarCpf);
// console.log(validarCpf.limpar('111-333-444-55'));
// console.log(validarCpf.construir('12020020022'));
// console.log(validarCpf.formatar('222. 222 222 33'));
// console.log(validarCpf.adicionarEvento());

// Com isso posso também criar um validador de cpf, se tiver uma array, uma lista de vários cpfs e verificar, essa serve tanto para usar no formulario, quanto para utilizar em um arquivo json fez um fetch da internet e quer usar
const validadorCPF = new ValidarCpf();
console.log(validadorCPF.validar('11122233344'));
console.log(validadorCPF.formatar('111 222-222-33'));