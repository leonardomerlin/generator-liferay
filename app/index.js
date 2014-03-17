'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var LiferayGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      // if (!this.options['skip-install']) {
      //   this.installDependencies();
      // }
      this.log('Author: leonardo.merlin@gmail.com');
    });

    this._.templateSettings.interpolate = /\<\@\=(.+?)\@\>/gim;
    this._.templateSettings.evaluate = /\<\@([\s\S]+?)\@\>/gim;
    this._.templateSettings.escape = /\<\@\-(.+?)\@\>/gim;
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Liferay generator.'));

    var prompts = [{
      // type: 'confirm', // types: input, confirm, list, rawlist,
      name: 'liferayVersion', // name to store
      message: 'Qual a versão do seu Liferay?', // The question to print.
      default: '6.1', // (String|Number|Array|Function) Default value(s) to use if nothing is entered, or a function
      choices: ['6.2', '6.1'], // (Array|Function) Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers. Array values can be simple strings, or objects containing a name (to display) and a value properties (to save in the answers hash)
      // validate: , // (Function) Receive the user input and should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
      // filter: , // (Function) Receive the user input and return the filtered value to be used inside the program. The value returned will be added to the Answers hash.
      // when: , // (Function) Receive the current user answers hash and should return true or false depending on whether or not this question should be asked.
    },{
      name: 'portletName',
      message: 'Qual o nome do seu novo Portlet?',
      default: 'Novo Portlet'
    },{
      type: 'confirm',
      name: 'hasEntity',
      message: 'Deseja gerar uma estrutura MVC?',
    },{
      name: 'entityName',
      message: 'Qual o nome da sua entidade (nome da tabela)?',
      default: 'My Entity',
      when: function(answers){return answers.hasEntity;}
    }];

    this.prompt(prompts, function (answers) {
      this.liferayVersion = answers.liferayVersion;
      this.portletName = answers.portletName;
      
      if(answers.hasEntity){
        this.entityName = answers.entityName;
      }

      done();
    }.bind(this));
  },

  app: function () {
    // init.jsp - contém todas as taglibs e imports comums ao portlet
    this.template('docroot/html/_init.jsp', 'docroot/html/init.jsp');



  },

  projectfiles: function () {
    this.mkdir('docroot');
    this.mkdir('docroot/META-INF');
    this.mkdir('docroot/WEB-INF');
    this.mkdir('docroot/html');
    this.mkdir('docroot/js');
    this.mkdir('docroot/css');
    this.copy('docroot/icon.png', 'docroot/icon.png');
  }
});

module.exports = LiferayGenerator;