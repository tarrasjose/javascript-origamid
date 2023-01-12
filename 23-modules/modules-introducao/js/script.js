import initeScrollSuave from "./modules/scroll-suave.js";
import initeAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import { teste01, teste02 } from "./modules/teste.js";

import * as teste from "./modules/teste.js" 
// Este importa tudo, sem precisar saber o nome

initeScrollSuave();
initeAnimacaoScroll();
initAccordion();
initTabNav();

teste01();
teste02();
// Aqui exportamos dois em um, mas o ideal é exportar smepre um usando o export default

console.log(teste.senha);