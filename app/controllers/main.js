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
      type: 'radar',
      data: {
        labels: ["Kubernetes", "Testing/Automated Test", "Monitoring", "Solutions Architech", "Automation", "Logging", "Coding", "Continuous Integration", "Scripting"],
        datasets: [{
          label: "Professional Years Experience",
          backgroundColor: 'rgb(102, 121, 182,.1)',
          borderColor: "rgb(102, 121, 182)",
          data: [3, 10, 7, 5, 11, 11, 11, 6,8],
        },
        {
          label: "Personal Years Experience",
          backgroundColor: "rgb(168, 176, 200,.2)",
          borderColor: "rgb(168, 176, 200)",
          data: [1.5, 11, 7, 5, 11, 5, 11, 4, 11],
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
          backgroundColor: 'rgb(102, 121, 182)',
          data: [7, 10, 11, 4, 4, 4, 5]
        },
        {
          label: "Personal Years Experience",
          backgroundColor: "rgb(168, 176, 200)",
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
          backgroundColor: 'rgb(102, 121, 182)',
          data: [9, 12, 10, 11, 9, 6],
        }, {
          label: "Personal Years Experience",
          backgroundColor: 'rgb(168, 176, 200)',
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
          backgroundColor: ["#6679B6", "#A8B0C8", "#6679B6", "#A8B0C8", "#6679B6", "#A8B0C8"],
          data: [4, 3, 8, 8, 8, 8]
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