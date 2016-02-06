define(
    [
        'angular'
    ],
    function(
        angular
    ) {
        var controller = [
            '$scope',
            '$location',
            '$log',
            function(
                $scope,
                $location,
                $log
            ) {
                $log.info('Debugging node.app');
            }
        ];

        return controller;
    }
)