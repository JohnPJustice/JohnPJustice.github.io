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
        $scope.mainSummary = "Senior Software Engineer with 9 years of experience in software development for government/healthcare industries. Highly skilled in troubleshooting, development operations, familiarity with the software development life cycle, CICD, devops, software methodologies and use of best practices and adopted patterns.";
        $scope.mainContactMe = "Professional Links";
        $scope.mainExperience = "Experience";
        $scope.nautilusName = "Nautilus Inc.";
        $scope.nautilusPostition = "Senior Site Reliability Engineer / Software Engineer";
        $scope.nautilusEmpTime = "August 2018 - Present";
        $scope.nautilusSummary = "Primary tasks include automating business operations, standardizing source control utilizing GIT-flow, creatingapplication pipelines for EC2 instances(windows/linux), lambdas,and other various special deployments.Created cloudformation templates to support automations. Setup application monitoring(supporting a kubernetescluster), synthetic testing(browser selenium scripting, api tests, browser tests, endpoint tests), logging,tooling automation, terraform templates, general task automation, and webhook integrations supportingproprietary applications and business operations.";
        $scope.capsaName = "Capsa Healthcare";
        $scope.capsaTitle = "Senior Software Engineer";
        $scope.capsaSummary = "Research, design, and implement scalable applications for application software, firmware and software interface, application utilities, data configuration, data extraction/retrieval from the ground up. Rapidly prototype new capabilities. Migrated Azure Data server, cloud services, and web applications.";
        $scope.integraName = "Integra telecom";
        $scope.integraTitle = "Software Engineer";
        $scope.integraSummary = "Full stack system engineer responsible for completion of tasks from stories, bugs and other product backlog items/epics. Implemented Deployment builds with unit tests and locked check-ins. Redesigned Customer Website Portal with a focus on responsive web design for optimal mobile capability.";
        $scope.engilityName = "Engility";
        $scope.engilityTitle = "Software Engineer";
        $scope.engilitySummary = "Utilized the following technologies at my tenure; C#, XMPP, Jabber client, ASP.NET MVC, Razor Webpages, JSON, WPF, WCF, MVVM pattern, MVC pattern, Entity Framework 4-4.5, Bootstrap, Created Plugin’s, JavaScript, JQuery, CSS, HTML, Icon Creation, Photoshop, VS2013, TFS, SQL, Blend, MSWord, MS PowerPoint, MS Visio, and Agile Methodology. Due to the security risk of the project I will not be able to explain exact roles, tasks performed, or capabilities created.";
        $scope.githubLink = "https://github.com/JohnPJustice";
        $scope.githubTitle = "GitHub";
        $scope.linkedInLink = "https://www.linkedin.com/in/john-paul-justice";
        $scope.linkedInTitle = "LinkedIn";
        $scope.skillSet= "Skill Set";
        var skillChart = new Chart(document.getElementById("devops"), {
            type: 'pie',
            data: {
              labels: ["Testing", "Monitoring", "Automation", "Logging", "Coding","Kubernetes"],
              datasets: [{
                label: "Years Experience",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#ff3333"],
                data: [5,5,9,9,9,1]
              }]
            },
            options: {
              title: {
                display: true,
                text: 'DevOps Skill Set'
              }
            }
        });
        var skillChart1 = new Chart(document.getElementById("pie-chart1"), {
            type: 'pie',
            data: {
              labels: ["C#", "Python", ".Net", "Azure", "AWS", "Linux"],
              datasets: [{
                label: "Years Experience",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#ff3333"],
                data: [9,7,9,5,5,3]
              }]
            },
            options: {
              title: {
                display: true,
                text: 'Professional Coding Languages'
              }
            }
        });
        var skillChart2 = new Chart(document.getElementById("pie-chart2"), {
            type: 'pie',
            data: {
              labels: ["TFS", "GIT", "Agile", "Waterfall/Canban", "CICD", "Devops"],
              datasets: [{
                label: "Years Experience",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#ff3333"],
                data: [9,9,7,8,7,4]
              }]
            },
            options: {
              title: {
                display: true,
                text: 'Source control/Practiced Methodologies'
              }
            }
        });




        skillChart.render();
        skillChart1.render();
        skillChart2.render();
    })
})();