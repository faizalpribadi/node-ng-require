define(
    [
        'angular',
        'angular-route',
        'angular-resource',
        'hello/app'
    ],
    function(
        angular,
        DefaultController
    ) {
        angular.module('default.app', [
                'ngRoute',
                'ngResource',
                'hello.app'
            ])
            .config(function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'app/default/template/index.html'
                    })
            })
    }
);
