define(
    [
        // include something hah ?
    ],
    function() {
        var resource = ['$resource', function($resource) {
            return $resource('/api/user/:id',
                {
                    id: '@id'
                },
                {
                    patch: {
                        method: 'PATCH'
                    }
                }
            )
        }];

        return resource;
    }
);