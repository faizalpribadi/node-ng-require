define(
    [
        'angular',
        'angular-route',
        'angular-resource'
    ],
    function(
        angular
    ) {
        angular.module('default.app',
            [
                'ngRoute',
                'ngResource'
            ]
        )
    }
);