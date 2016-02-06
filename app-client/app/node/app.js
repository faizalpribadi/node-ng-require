define(
    [
        'angular',
        'angular-route',
        'angular-resource',
        'node/controller/UserController'
    ],
    function(
        angular,
        UserController
    ) {
        angular.module('node.app',
            [
                'ngRoute',
                'ngResource'
            ]
        )
            .config(['$routeProvider'], function($routeProvider) {
                $routeProvider
                    .when('/node/user', {
                        controller: 'UserController',
                        templateUrl: 'node/template/user/index.html'
                    });
            })
            .controller('UserController', UserController);
    }
);