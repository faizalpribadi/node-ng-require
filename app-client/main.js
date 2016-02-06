require(
    [],
    function() {
        require.config({
            baseUrl: 'app/',
            urlArgs: 'v=' + (new Date().getTime()),
            paths: {
                'jQuery': '../vendors/jquery/dist/jquery.min',
                'angular': '../vendors/angular/angular.min',
                'angular-resource': '../vendors/angular-resource/angular-resource.min',
                'angular-route': '../vendors/angular-route/angular-route.min',
                'bootstrap': '../vendors/bootstrap/dist/js/bootstrap.min'
            },
            shim: {
                'jQuery': {
                    exports: '$'
                },
                'angular': {
                    exports: 'angular'
                },
                'angular-resource': {
                    deps: ['angular']
                },
                'angular-route': {
                    deps: ['angular']
                },
                'bootstrap': {
                    deps: ['jQuery']
                }
            }
        });

        require(
            [
                'angular',
                'default/app'
            ],
            function(angular, defaultApp) {
                angular.element(window.document).ready(function() {
                    angular.bootstrap(window.document, ['default.app']);
                });
            }
        )
    }
);