export const nome = document.querySelector('#nome');
export const formulario = document.querySelector('.formulario');


export default formulario.addEventListener('submit', (e) => {
   //e.preventDefault();
   //return false}
   const nomeImput = nome.value;
   localStorage.setItem("nomeImput", JSON.stringify(nomeImput));
   const nomeIngresso = JSON.parse(localStorage.getItem("nomeImput"));
})