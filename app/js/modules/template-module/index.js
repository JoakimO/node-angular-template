'use strict';
var angular = require('angular');
var app = angular.module('template-module', []); 

app.directive('item', [require('./directives/item')]);

app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('test', {
        url: '/test/',
        template : require('fs').readFileSync(__dirname + '/views/test.html', 'utf8'),
    });
}]);