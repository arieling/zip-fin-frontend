'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
        .state('account', {
            url: '/account',
            templateUrl: 'templates/account.html'
        })

            .state('loan', {
            url: '/loan',
            templateUrl: 'templates/loan.html'
        })
            .state('loanDetail', {
            url: '/loanDetail',
            templateUrl: 'templates/loanDetail.html'
        });
    }
]);