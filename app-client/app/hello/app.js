define(
    [
        'angular',
        'angular-route',
        'angular-resource',
        'hello/controller/HelloController'
    ],
    function(
        HelloController
    ) {
        angular.module('hello.app',
            [
                'ngRoute',
                'ngResource'
            ]
        )
        .controller('HelloController', HelloController)
        .config(function($routeProvider) {
            $routeProvider
                .when('/hello', {
                    templateUrl: 'app/hello/template/index.html'
                })
        })
    }
);