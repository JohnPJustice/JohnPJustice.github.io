(function () {
  var jpjapp = angular.module("app", ["ngRoute"]);
  jpjapp.controller("mainController", function ($scope) {
    var url="https://johnpjustice.github.io/data.json";
    var jsonInfo = {};
    $.ajax({
      url: url,
      async: false,
      dataType: 'json',
      type:"GET",
      success: function (data) {
        jsonInfo = data;
      }
    });
    
    $scope.mainName = angular.uppercase(jsonInfo.mainName);
    $scope.mainNameTitle = jsonInfo.mainName;
    $scope.navAbout = jsonInfo.navAbout;
    $scope.navContact = jsonInfo.navContact;
    $scope.navProjects = jsonInfo.navProjects;
    $scope.navTitle = jsonInfo.navTitle;
    $scope.aboutMe = jsonInfo.aboutMe;
    $scope.photoOfMe = jsonInfo.photoOfMe;
    $scope.mainTitle = jsonInfo.mainTitle;
    $scope.mainSummary = jsonInfo.mainSummary;
    $scope.mainContactMe = jsonInfo.mainContactMe;
    $scope.mainExperience = jsonInfo.mainExperience;
    $scope.nautilusName = jsonInfo.nautilusName;
    $scope.nautilusPostition = jsonInfo.nautilusPostition;
    $scope.nautilusEmpTime = jsonInfo.nautilusEmpTime;
    $scope.jgName = jsonInfo.jgName;
    $scope.jgPosition = jsonInfo.jgPosition;
    $scope.jgEmpTime = jsonInfo.jgEmpTime;
    $scope.capsaEmpTime = jsonInfo.capsaEmpTime;
    $scope.integraEmpTime = jsonInfo.integraEmpTime;
    $scope.engilityEmpTime = jsonInfo.engilityEmpTime;
    $scope.nautilusSummary = jsonInfo.nautilusSummary;
    $scope.jgSummary = jsonInfo.jgSummary;
    $scope.capsaName = jsonInfo.capsaName;
    $scope.capsaTitle = jsonInfo.capsaTitle;
    $scope.capsaSummary = jsonInfo.capsaSummary;
    $scope.integraName = jsonInfo.integraName;
    $scope.integraTitle = jsonInfo.integraTitle;
    $scope.integraSummary = jsonInfo.integraSummary;
    $scope.engilityName = jsonInfo.engilityName;
    $scope.engilityTitle = jsonInfo.engilityTitle;
    $scope.engilitySummary = jsonInfo.engilitySummary;
    $scope.githubLink = jsonInfo.githubLink;
    $scope.githubTitle = jsonInfo.githubTitle;
    $scope.linkedInLink = jsonInfo.linkedInLink;
    $scope.linkedInTitle = jsonInfo.linkedInTitle;
    $scope.skillSet = jsonInfo.skillSet;

    var devopsChart = new Chart(document.getElementById("devops"), {
      type: 'bar',
      data: {
        labels: ["Kubernetes", "Testing/Automated Test", "Monitoring/Logging", "Distributed Computing", "Automation/Tooling", "Databases", "Coding", "CICD", "Operation Systems"],
        datasets: [{
          label: "Professional Years Experience",
          backgroundColor:  "rgb(102, 121, 182)",
          data: [4, 10, 7, 5, 9, 11, 11, 11, 8],
        },
        {
          label: "Personal Years Experience",
          backgroundColor:  "rgb(168, 176, 200)",
          data: [5, 12, 7, 7, 11, 11, 11, 11, 11],
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
        labels: ["Python", "C#", "Javascript", "Terraform", "Docker", "Pack", "GoLang",],
        datasets: [{
          label: "Professional Years Experience",
          backgroundColor: 'rgb(102, 121, 182)',
          data: [7, 10, 8, 4, 6, 1, 4]
        },
        {
          label: "Personal Years Experience",
          backgroundColor: "rgb(168, 176, 200)",
          data: [6, 11, 10, 3, 7, 3, 5]
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
        labels: ["Joint Application Development", "Feature Driven Development", "Agile", "Waterfall/Canban", "Rapid Development", "Devops", "Spiral"],
        datasets: [{
          label: "Professional Years Experience",
          backgroundColor: 'rgb(102, 121, 182)',
          data: [5, 5, 4, 8, 6, 8, 3],
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Practiced Methodologies'
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
      type: 'bar',
      data: {
        labels: ["Front End", "Back End", "Datbase Management", "Verson Control", "Pattern Development", "Solution Architechure"],
        datasets: [{
          label: "Professional Years Experience",
          backgroundColor: 'rgb(102, 121, 182)',
          data: [9, 10, 10, 11, 10, 6],
        }, {
          label: "Personal Years Experience",
          backgroundColor: 'rgb(168, 176, 200)',
          data: [10, 11, 10, 11, 11, 7],
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Full Stack Experience'
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

    devopsChart.render();
    codingChart.render();
    methodChart.render();
    fullStackChart.render();
  });

})();