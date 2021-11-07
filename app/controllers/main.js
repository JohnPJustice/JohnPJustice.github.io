(function () {
  var jpjapp = angular.module("app", ["ngRoute"]);
  jpjapp.controller("mainController", function ($scope) {
    var url = "https://johnpjustice.github.io/data.json";
    var jsonInfo = {};
    $.ajax({
      url: url,
      async: false,
      dataType: 'json',
      success: function (data) {
        jsonInfo = data;
      }
    });

    $scope.mainName = jsonInfo.mainName;
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
          backgroundColor: ["#404040", "#484848", "#505050", "#585858", "#606060", "#686868"],
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