export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate(){
    return new Date();
  }
  get _futureDate() {
    return new Date(this.futureDate)
  }
  get _timeStampDifença() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days() {
    return Math.floor(this._timeStampDifença / (24 * 60 * 60 * 1000));
    // 24=horas do dia * 60 = minutos em cada hora * 60 porque 60 segundos em cada minuto * 1000 porque são 1000 milissegundos em cada segundo
    //Math.floor para arrendondar para baixo
  }
  get hours() {
    return Math.floor(this._timeStampDifença / (60 * 60 * 1000));
    // Pra pegar o total de horas que falta, basta tirar o 24 que é do dia
  }
  get minutes() {
    return Math.floor(this._timeStampDifença / (60 * 1000));
    // para minutos só deixa os segundos com os milissegunds
  }
  get seconds() {
    return Math.floor(this._timeStampDifença / 1000);
    // os segundos só deixa os milissegundos
  }
  get total() {
    const days = this.days;
    // Para o tanto de horas usa modulo de 24
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days: days,
      // quando é igual o nome pode usar assim também
      hours,
      minutes,
      seconds,
    }
  }
}
