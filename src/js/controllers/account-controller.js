
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('RDash')
    .controller('AccountCtrl', ['$scope', '$http', AccountCtrl]);

function AccountCtrl($scope, $http) {


    $scope.account = [];
    $(document).ready(function() {
        $('#account').DataTable({
            'ajax': {
                url: 'https://api.myjson.com/bins/3toab'
            },
            'columns': [
                { "data": "firstName" },
                { "data": "lastName" },
                { "data": "username" },
                { "data": "email" }
            ]

        });
        $('#example').DataTable();
    } );

    };
