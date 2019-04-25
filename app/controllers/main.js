(function () {

    var jpjapp = angular.module("app", []);
    jpjapp.controller("mainController", function ($scope) {
        $scope.mainName = "John Paul Justice";
        $scope.navAbout = "Experience";
        $scope.navContact = "Contact Me";
        $scope.navProjects = "Skill Stack";
        $scope.navTitle = "Home";
        $scope.mainTitle = "Senior Software Engineer / Site Reliability Engineer";
        $scope.mainSummary = "Senior Software Engineer with 8 years of experience in software development for government/healthcare industries. Highly skilled in troubleshooting, development operations, familiarity with the software development life cycle, continuous integration/continuous delivery, devops, software methodologies and use of best practices and adopted patterns.";
        $scope.mainContactMe = "Professional Links";
        $scope.mainExperience = "Experience";
        $scope.nautilusName = "Nautilus Inc.";
        $scope.nautilusPostition = "Senior Site Reliability Engineer / Software Engineer";
        $scope.nautilusEmpTime = "August 2017 - Present"
        $scope.nautilusSummary = "Primary tasks include automating business operations, standardizing source control utilizing GIT-flow, creating" +
            "application pipelines for EC2 instances(windows/linux), lambdas,and other various special deployments." +
            "Created cloudformation templates to support automations. Setup application monitoring(supporting a kubernetes" +
            "cluster), synthetic testing(browser selenium scripting, api tests, browser tests, endpoint tests), logging," +
            "tooling automation, terraform templates, general task automation, and webhook integrations supporting" +
            "proprietary applications and business operations."






    })
})();