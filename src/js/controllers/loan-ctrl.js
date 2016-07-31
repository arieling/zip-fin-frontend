angular.module('RDash')
    .controller('LoanCtrl', ['$scope', '$http', LoanCtrl]);

function LoanCtrl($scope, $http) {

    $(document).ready(function() {
        $('#loan').DataTable({
            'ajax': {
                url: 'https://api.myjson.com/bins/sh43'
            },
            'columns': [
                { "data": "status" },
                { "data": "applicant" },
                { "data": "application" },
                { "data": "principal" },
                { "data": "date" },
                { "data":  null}
            ],
            "columnDefs": [ {
                "targets": -1,
                "data": null,
                "defaultContent": "<a href='#/loanDetail'>View</a> <button>Delete</button>"
            } ]
        });
        $('#loanGeneral').DataTable({
            'ajax': {
                url: 'https://api.myjson.com/bins/20mmb'
            },
            'columns': [
                { "data": "name" },
                { "data": "value" },
                { "data": null }
            ],
            "columnDefs": [ {
                "targets": -1,
                "data": null,
                "defaultContent": "<button>Edit</button>"
            } ]
        });
    } );
};
