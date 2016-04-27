'use strict';
require('./boot');
bootstrap(); 

var angular = require('angular');
var app = angular.module('template-app'); 

app.config(['$stateProvider', '$urlRouterProvider', require('./routes')]);

function bootstrap() {
    require('./modules/template-module'); 
}
