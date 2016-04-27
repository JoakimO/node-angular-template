'use strict';
module.exports = function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
    });
    $urlRouterProvider.otherwise('/home');
};