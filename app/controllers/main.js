(function () {
  var jpjapp = angular.module("app", ["ngRoute"]);
  jpjapp.controller("mainController", function ($scope) {
    $scope.mainName = "John Paul Justice";
    $scope.navAbout = "Experience";
    $scope.navContact = "Contact Me";
    $scope.navProjects = "Skill Stack";
    $scope.navTitle = "Home";
    $scope.aboutMe = "About Me";
    $scope.photoOfMe = "Photo of me:";
    $scope.mainTitle = "Senior Site Reliability Engineer / Senior Software Engineer";
    $scope.mainSummary = "Senior Software Engineer with over a decade of experience of software development in the government, gaming, and healthcare industries. Highly skilled in troubleshooting, development operations, familiarity with the software development life cycle, CICD, devops, software methodologies and use of best practices and adopted patterns.";
    $scope.mainContactMe = "Professional Links";
    $scope.mainExperience = "Experience";
    $scope.nautilusName = "Nautilus Inc.";
    $scope.nautilusPostition = "Senior SRE /Senior Software Engineer";
    $scope.nautilusEmpTime = "Aug 2018 - Sept 2019";
    $scope.jgName = "Jahnel Group";
    $scope.jgPosition = "Senior SRE /Senior Software Engineer";
    $scope.jgEmpTime = "Sept 2019 - Present";
    $scope.capsaEmpTime = "Aug 2016 - Aug 2018";
    $scope.integraEmpTime = "Aug 2015 - Aug 2016";
    $scope.engilityEmpTime = "Aug 2014 - Aug 2015";
    $scope.nautilusSummary = "Lead the DevOps Mindset among the teams, by creating project templates for applications in such languages as python, nodejs, dotnetcore and dotnet framework, as well as automating cloudformation code pipelines to speed up development and standardizing source control utilizing the GIT-ﬂow. Setup application monitoring(supporting a kubernetes cluster), synthetic testing(browser scripting using selenium scripting, api tests, browser tests, endpoint tests), logging, tooling automation and webhook integrations supporting proprietary applications and business operations primarily in an AWS infrastructure as code environment. Primary tasks include automating business operations, creating application pipelines for EC2 instances(windows/linux), lambdas,and other various special deployments.";
    $scope.jgSummary = "Created and maintained documentation for systems and processes for new and existing systems. Implemented, tested, deployed and monitored microservices providing the backend service to game studios. Performing continuous integration and delivery of new microservices, on-demand trouble shooting of large-scale deployment issues on Linux and windows systems. Contributed to the development and maintenance of automation tools used in the management of our infrastructure. Coordinated deployments with application owners to ensure smooth transitions and minimal user impact.";
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
    $scope.skillSet = "Skill Set";
    var devopsChart = new Chart(document.getElementById("devops"), {
      type: 'radar',
      data: {
        labels: ["Kubernetes", "Testing/Automated Test", "Monitoring", "Solutions Architech", "Automation", "Logging", "Coding", "Continuous Integration", "Scripting"],
        datasets: [{
          label: "Professional Years Experience",
          backgroundColor: 'rgb(64,64,64,.1)',
          borderColor: "rgb(64,64,64)",
          data: [1, 8, 5, 3, 9, 9, 9, 4, 6],
        },
        {
          label: "Personal Years Experience",
          backgroundColor: 'rgb(88,88,88,.2)',
          borderColor: "rgb(88,88,88)",
          data: [0.5, 10, 6, 4, 10, 4, 10, 3, 10],
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'DevOps Skill Experience'
        },
      }
    });
    var codingChart = new Chart(document.getElementById("codingChart"), {
      type: 'bar',
      data: {
        labels: ["Python", "C#", ".Net", "Azure", "AWS", "Linux", "JavaScript",],
        datasets: [{
          label: "Professional Years Experience",
          backgroundColor: 'rgb(64, 64, 64)',
          data: [5, 9, 9, 4, 4, 2, 5]
        },
        {
          label: "Personal Years Experience",
          backgroundColor: "rgb(88, 88, 88)",
          data: [6, 11, 9, 3, 2, 2, 7]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Code Language Experience'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    var methodChart = new Chart(document.getElementById("methodChart"), {
      type: 'bar',
      data: {
        labels: ["TFS", "GIT", "Agile", "Waterfall/Canban", "CICD", "Devops"],
        datasets: [{
          label: "Profession Years Experience",
          backgroundColor: 'rgb(64,64,64)',
          data: [9, 9, 7, 8, 7, 4],
        }, {
          label: "Personal Years Experience",
          backgroundColor: 'rgb(88,88,88)',
          data: [9, 9, 7, 8, 7, 4],
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Source control/Practiced Methodologies'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    var fullStackChart = new Chart(document.getElementById("fullStackChart"), {
      type: 'polarArea',
      data: {
        labels: ["AngularJS", "NoSQL", "Relational databases", "Api", "Pattern Development", "Solution Architechure"],
        datasets: [{
          label: "Years Experience",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#ff3333"],
          data: [4, 3, 8, 6, 6, 4]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Full Stack Experience'
        },
      }
    });

    devopsChart.render();
    codingChart.render();
    methodChart.render();
    fullStackChart.render();
  });

})();