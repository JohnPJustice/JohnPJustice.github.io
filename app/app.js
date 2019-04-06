(function () {
    var mainApp = angular.module("app", ['ngRoute']);

    mainApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'main.html',
                controller:'homeController'
            })
            .when('/skillstack', {
                templateUrl: 'skillStack-template.html',
                controller: 'skillStackController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);


});

