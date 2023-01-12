// const div = document.querySelector('div');
// console.log(div.dataset);

const div = document.querySelector('[data-cor');

div.dataset.height = 1000; //adicionar nova

delete div.dataset.width; //deletar

div.dataset.totalHeight = 2000; //adicionar nova

console.log(div.dataset);
// console.log(Object.prototype.toString.call(div));