export const nome = document.querySelector('#nome');
export const formulario = document.querySelector('.formulario');
const inputNascimento = document.querySelector('#nascimento');
console.log(inputNascimento)


export default formulario.addEventListener('submit', (e) => {
   e.preventDefault();
   //return false}
   const nomeImput = nome.value;
   localStorage.setItem("nomeImput", JSON.stringify(nomeImput));
   const nomeIngresso = JSON.parse(localStorage.getItem("nomeImput"));

   //enviando a data para localstorage. Vamos tentar fazer diferente do chat gpt
   const dataDonascimento = inputNascimento.value;
   localStorage.setItem("dataNascimento", JSON.stringify(dataDonascimento));
})
/*chat GPT/BING
// Get the input element
var input = document.getElementById("nascimento");

// Add an event listener to validate the input value
input.addEventListener("change", function() {
  // Get the input value as a Date object
  var date = new Date(input.value);

  // Get the current date as a Date object
  var today = new Date();

  // Calculate the difference in years between the input and current date
  var diff = today.getFullYear() - date.getFullYear();

  // Adjust the difference if the input month and day are not past yet
  if (today.getMonth() < date.getMonth() ||
      (today.getMonth() == date.getMonth() && today.getDate() < date.getDate())) {
    diff--;
  }

  // Check if the difference is at least 16
  if (diff >= 16) {
    alert("You are over 16 years old.");
  } else {
    alert("You are under 16 years old.");
  }
});*/




/*function maiorDe16(data) {
   const dataAtual = new Date();
   const idade16 = new Date(data.getUTCFullYear() +16);
   if(dataAtual <= idade16){
   }
}*/

function validaDtaNascimento(){
   const dataNascimento = new Date (inputNascimento.value);
   if(dataNascimento >= maiorQue16){
      return console.log('pode participar do festival')
   }
   console.log(dataNascimento)
}

function maiorQue16(data){
   const dataAtual = new Date(); //para colocar a data do dia, não precisa colocar o valor, assim ele colocará automaticamente.
   const dataMais16 = new Date(data.getUTCFullYear() + 16, data.getUTCMonth(), data.getUTCDate());//getUTCDate pega o dia.
   return dataMais16 <= dataAtual;
};