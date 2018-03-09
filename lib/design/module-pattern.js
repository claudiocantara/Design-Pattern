

/* Module Pattern
   funcoes retornadas dentro de um objeto.
   variaveis ou metodos privados devem ficar fora do escopo objeto que retorna.
*/
const ModulePattern = (function() {
  var privateCount = 0;

  return {
    init : function() {
      this.incrementCounter();
      console.log(`Contador esta em ${privateCount}`);
      this.incrementCounter();
      console.log(`Contador esta em ${privateCount}`);
      this.incrementCounter();
      console.log(`Contador esta em ${privateCount}`);
    },
    incrementCounter: function() {
      return privateCount++;
    },
  }

})();

// Permite a excucao do script como um modulo.
const Execute = () => {
  const init = () => ModulePattern.init();
  init();
}

module.exports = Execute;
