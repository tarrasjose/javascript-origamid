export default class ValidarCpf {
  constructor(element) {
    this.element = element;
  }
  limpar(cpf) {
    return cpf.replace(/\D/g, '');
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }
  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  }
  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    console.log(matchCpf);
    return (matchCpf && matchCpf[0] === cpf)
  }
  validarNaMudanca(cpfElement) {
    // console.log(cpfElement); está dando o  input
    // console.log(this.validar(cpfElement.value));
    if(this.validar(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value);
      cpfElement.classList.add('valido');
      cpfElement.classList.remove('erro');
      cpfElement.nextElementSibling.classList.remove('ativar');
    } else {
      cpfElement.classList.add('erro');
      cpfElement.classList.remove('valido');
      cpfElement.nextElementSibling.classList.add('ativar');
    }
  }
  adicionarEvento() {
    // change só vai ocorrer quando houver uma mudança
    this.element.addEventListener('change', () => {
      // Se usar arrow function () =>  o this é uma coisa, se usar function () o this é outra coisa 
      // console.log(this);
      this.validarNaMudanca(this.element)
    })
  }
  adicionarErroSpan() {
    const erroElement = document.createElement('span');
    erroElement.classList.add('erro-text');
    erroElement.innerText = 'CPF Inválido';
    // para colocar a mensagem de erro
    this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling);
  }
  iniciar() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}

// console.log('teste');