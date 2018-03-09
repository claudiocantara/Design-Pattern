

/* Reaveling Pattern
  Retorna um obejto que tem como propriedades funcoes
  Dando possibilidade de retornar apenas funcoes desejadas.
  Um pouco mais consistente do que o Module Pattern
*/

const RevealingPattern =  function () {
  var privateCount = 0;

  function incrementCounter() {
    return privateCount++;
  }

  function init() {
    incrementCounter();
      console.log(`Contador esta em ${privateCount}`);
      incrementCounter();
      console.log(`Contador esta em ${privateCount}`);
      incrementCounter();
      console.log(`Contador esta em ${privateCount}`);
  }

  return {
    init
  }

}


// Permite a excucao do script como um modulo.
const Execute = () => {
  var pattern = new RevealingPattern();

  return  pattern.init();


}

module.exports = Execute;
