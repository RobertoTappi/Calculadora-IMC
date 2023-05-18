
function ValorIMC () {
  const resultado = document.querySelector('#resultado')
  const altura = document.querySelector('#altura')
  const peso = document.querySelector('#peso')

  
  if ( altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(1)
    let classification = ''

  switch (true) {
    case (imc < 18.5): classification = 'Abaixo do peso';break;
    case (imc < 24.9): classification = 'Peso ideal (parabéns)'; break;
    case (imc < 29.9): classification = 'Levemente acima do peso'; break;
    case (imc < 34.9): classification = 'Obesidade Grau I'; break;
    case (imc < 39.9): classification = 'Obesidade Grau II (severa)'; break;
    case (imc > 40): classification = 'Obesidade Grau III (mórbida)'; break;
    
  } 
  resultado.innerHTML = ` Olá, seu IMC é de: ${imc} <br> Você se enquadra em: ${classification}.`
  } 
  
}
