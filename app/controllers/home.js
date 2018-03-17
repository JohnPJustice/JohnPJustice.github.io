(function(){

    var APP = angular.module("APP", []);

    APP.controller("homeController", function ($scope) {
        $scope.name = "John Paul Justice";
        $scope.about = "Experience";
        $scope.contact = "Contact Me";
        $scope.projects = "Skill Stack";
        $scope.home = "Home";



    })
})();