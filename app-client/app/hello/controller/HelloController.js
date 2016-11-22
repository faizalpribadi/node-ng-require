define(
    [
        angular
    ],
    function(angular) {
        var controller = [
            '$scope',
            function($scope) {
                $scope.title = 'Hello Page'
            }
        ];

        return controller;
    }
);
