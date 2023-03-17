//import { nome, formulario} from "./ingresso.js"


const bora = JSON.parse(localStorage.getItem('nomeImput'));
console.log(bora)
//abaixo está funcionando, agora falta
//achar um mondo de fazer a intereação com o input
const olaMundo = 'Hello world';
const section = document.querySelector('.ingresso_Impresso');
console.log(section)
section.innerHTML = `
<h2 class="ingressoGerado-chamada">Uhul, agora sim! 
      Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
      <div class="ingresso-qrcode">
         <div class="ingresso-logo">
            <img class="logo-ingresso" src="/assents/img/Logo1 1.png" alt="logo do festival">
            <img class="logo-ingresso-final" src="/assents/img/Ellipse 4.png" alt="simbolo Ellipse">
         </div>
         <div class="ingresso-informacoes">
            <img class="qr-code" src="/assents/img/Qr code 1.png" alt="qr Code do ingresso">
            <div class="ingresso-informacoes-texto">
               <h3 class="nome-ingresso">${bora}</h3>
               <p class="ingresso-texto">Ingresso Costesia</p>
               <p class="ingresso-texto">Setor Pista</p>
               <p class="ingresso-texto">Data: 11/03</p>
               <p class="ingresso-texto">Local: São Paulo-SP</p>
            </div>
         </div>
      </div>
`


/*class CriaIngresso{
   ingressoImpresso = () => {
      section.innerHTML = 
      `
      <h2 class="ingressoGerado-chamada">Uhul, agora sim! 
      Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
      <div class="ingresso-qrcode">
         <div class="ingresso-logo">
            <img class="logo-ingresso" src="/assents/img/Logo1 1.png" alt="logo do festival">
            <img class="logo-ingresso-final" src="/assents/img/Ellipse 4.png" alt="simbolo Ellipse">
         </div>
         <div class="ingresso-informacoes">
            <img class="qr-code" src="/assents/img/Qr code 1.png" alt="qr Code do ingresso">
            <div class="ingresso-informacoes-texto">
               <h3 class="nome-ingresso">${nomeIngresso}</h3>
               <p class="ingresso-texto">Ingresso Costesia</p>
               <p class="ingresso-texto">Setor Pista</p>
               <p class="ingresso-texto">Data: 11/03</p>
               <p class="ingresso-texto">Local: São Paulo-SP</p>
            </div>
         </div>
      </div>
      `
   }
}*/