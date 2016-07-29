(function () {
    'use strict';

    angular.module('BlurAdmin.pages.accounts', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('accounts', {
                url: '/accounts',
                template : '<ui-view></ui-view>',
                abstract: true,
                controller: 'TablesPageCtrl',
                title: 'Accounts',
                sidebarMeta: {
                    icon: 'ion-compose',
                    order: 1000,
                },
            })
            .state('accounts.layouts', {
                url: '/accountslayouts',
                templateUrl : 'app/pages/accounts/smart/tables.html',
                title: 'accountlayouts',
                sidebarMeta: {
                    order: 0,
                },
            })
    }
})();
