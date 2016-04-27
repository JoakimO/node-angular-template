'use strict';
var angular = require('angular');
var _ = require('lodash');

module.exports = function() {
    return {
        restrict : 'E',
        scope : {
            'label' : '='
        },
        controller : function($scope) {
        }, 
        template : require('fs').readFileSync(__dirname + '/../views/item.html', 'utf8')
    };
};