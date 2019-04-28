(function () {

    var jpjapp = angular.module("app", []);
    jpjapp.controller("mainController", function ($scope) {
        $scope.mainName = "John Paul Justice";
        $scope.navAbout = "Experience";
        $scope.navContact = "Contact Me";
        $scope.navProjects = "Skill Stack";
        $scope.navTitle = "Home";
        $scope.aboutMe = "About Me";
        $scope.mainTitle = "Senior Software Engineer / Site Reliability Engineer";
        $scope.mainSummary = "Senior Software Engineer with 8 years of experience in software development for government/healthcare industries. Highly skilled in troubleshooting, development operations, familiarity with the software development life cycle, continuous integration/continuous delivery, devops, software methodologies and use of best practices and adopted patterns.";
        $scope.mainContactMe = "Professional Links";
        $scope.mainExperience = "Experience";
        $scope.nautilusName = "Nautilus Inc.";
        $scope.nautilusPostition= "Senior Site Reliability Engineer / Software Engineer";
        $scope.nautilusEmpTime = "August 2017 - Present";
        $scope.nautilusSummary =  "Primary tasks include automating business operations, standardizing source control utilizing GIT-flow, creatingapplication pipelines for EC2 instances(windows/linux), lambdas,and other various special deployments.Created cloudformation templates to support automations. Setup application monitoring(supporting a kubernetescluster), synthetic testing(browser selenium scripting, api tests, browser tests, endpoint tests), logging,tooling automation, terraform templates, general task automation, and webhook integrations supportingproprietary applications and business operations.";
        $scope.capsaName = "Capsa Healthcare";
        $scope.capsaTitle ="Senior Software Engineer";
        $scope.capsaSummary = "Research, design, and implement scalable applications for application software, firmware and software interface, application utilities, data configuration, data extraction/retrieval from the ground up. Rapidly prototype new capabilities. Migrated Azure Data server, cloud services, and web applications.";
        $scope.integraName = "Integra telecom";
        $scope.integraTitle = "Software Engineer";
        $scope.integraSummary = "Full stack system engineer responsible for completion of tasks from stories, bugs and other product backlog items/epics. Implemented Deployment builds with unit tests and locked check-ins. Redesigned Customer Website Portal with a focus on responsive web design for optimal mobile capability.";
        $scope.engilityName = "Engility";



 



    })
})();