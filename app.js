// habilita o botão do formulário somente se todos os campos forem preenchidos //

// se houver pelo menos um campo vazio, retorna false //
function checkInputs(inputs) {
    var filled = true;
    
    inputs.forEach(function(input) {
        
      if(input.value === "") {
          filled = false;
      }
    
    });
    console.log('filled:',filled);
    return filled;
    
  }
 
  // a constante 'inputs' vai conter todos os inputs do HTML //
  const inputs = document.querySelectorAll('input');
  var button = document.querySelector(".formcontato__botao")
  // para cada campo do formulário, adiciona um event listener keyup com a função que habilita //
  // o botão quando todos os campos estiverem preenchidos //

  inputs.forEach(function(input) {
    console.log(input);
    input.addEventListener("keyup", function() {
        console.log(input.onkeyup);
        if(checkInputs(inputs)) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  });