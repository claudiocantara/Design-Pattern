
import inquirer from 'inquirer';

inquirer.prompt([
  {
    type: 'rawlist',
    name: 'design',
    message: 'Escolha o padrão de projeto para testar',
    choices: [
      'module pattern',
      'revealing pattern',
      'observer pattern',
      'singleton pattern',
      'prototype pattern',
      'class pattern'
    ]
  }
]).then(answers => {

  const classToImport = `./design/${answers.design.replace(' ','-')}.js`;

})


