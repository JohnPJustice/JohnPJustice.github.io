﻿(function () {
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
    $scope.nautilusSummary1 = jsonInfo.nautilusSummary1;
    $scope.nautilusSummary2 = jsonInfo.nautilusSummary2;
    $scope.nautilusSummary3 = jsonInfo.nautilusSummary3;
    $scope.jgSummary1 = jsonInfo.jgSummary1;
    $scope.jgSummary2 = jsonInfo.jgSummary2;
    $scope.jgSummary3 = jsonInfo.jgSummary3;
    $scope.jgSummary4 = jsonInfo.jgSummary4;
    $scope.jgSummary5 = jsonInfo.jgSummary5;
    $scope.jgSummary6 = jsonInfo.jgSummary6;
    $scope.capsaName = jsonInfo.capsaName;
    $scope.capsaTitle = jsonInfo.capsaTitle;
    $scope.capsaSummary1 = jsonInfo.capsaSummary1;
    $scope.capsaSummary2 = jsonInfo.capsaSummary2;
    $scope.capsaSummary3 = jsonInfo.capsaSummary3;
    $scope.integraName = jsonInfo.integraName;
    $scope.integraTitle = jsonInfo.integraTitle;
    $scope.integraSummary1 = jsonInfo.integraSummary1;
    $scope.integraSummary2 = jsonInfo.integraSummary2;
    $scope.integraSummary3 = jsonInfo.integraSummary3;
    $scope.engilityName = jsonInfo.engilityName;
    $scope.engilityTitle = jsonInfo.engilityTitle;
    $scope.engilitySummary1 = jsonInfo.engilitySummary1;
    $scope.engilitySummary2 = jsonInfo.engilitySummary2;
    $scope.engilitySummary3 = jsonInfo.engilitySummary3;
    $scope.githubLink = jsonInfo.githubLink;
    $scope.githubTitle = jsonInfo.githubTitle;
    $scope.linkedInLink = jsonInfo.linkedInLink;
    $scope.linkedInTitle = jsonInfo.linkedInTitle;
    $scope.skillSet = jsonInfo.skillSet;

    // Get list of collapsible elements
    var colls = document.getElementsByClassName("collapsible");
    // Close all collapsible elements
    function closeAll() {
      for (var col of colls) {
        col.classList.remove("active");
        var content = col.nextElementSibling;
        content.style.display = "none";
      }
    }
    // Add click event to each collapsible element
    for (var col of colls) {
      col.addEventListener("click", function() {
        if (this.classList.contains("active")) {
          // Close active collapsible elements
          this.classList.remove("active");
          this.nextElementSibling.style.display = "none";
        } else {
          // Close all collapsible elements
          closeAll();
          // Open this collapsible element
          this.classList.add("active");
          this.nextElementSibling.style.display = "block";
        }
      });
    }

    // Get list of modal elements
    var modals = document.getElementsByClassName("modal");
    // When the user clicks anywhere outside of the modal, close it 
    window.onclick = function(event) {
      for (var modal of modals) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    }
    

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    // var devopsChart = new Chart(document.getElementById("devops"), {
    //   type: 'bar',
    //   data: {
    //     labels: ["Kubernetes", "Testing/Automated Test", "Monitoring/Logging", "Distributed Computing", "Automation/Tooling", "Databases", "Coding", "CICD", "Operation Systems"],
    //     datasets: [{
    //       label: "Professional Years Experience",
    //       backgroundColor:  "rgb(102, 121, 182)",
    //       data: [4, 10, 7, 5, 9, 11, 11, 11, 8],
    //     },
    //     {
    //       label: "Personal Years Experience",
    //       backgroundColor:  "rgb(168, 176, 200)",
    //       data: [5, 12, 7, 7, 11, 11, 11, 11, 11],
    //     }
    //     ]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: 'DevOps Skill Experience'
    //     },
    //   }
    // });

    // var devopsPieChart = new Chart(document.getElementById("devopsPie"), {
    //   type: "pie",
    //   data: {
    //     labels: ["Kubernetes", "Testing/Automated Test", "Monitoring/Logging", "Distributed Computing", "Automation/Tooling", "Databases", "Coding", "CICD", "Operation Systems"],
    //     datasets: [{
    //       label: "Professional Years Experience",
    //       backgroundColor:  ["#0474fb","#fcdc7c","#0464d4","#a48474","#ead6d2","#3c3ff4e","#0474fb","#ead6d2","#a48474"],
    //       data: [4, 10, 7, 5, 9, 11, 11, 11, 8],
    //     }]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: 'Years of DevOps Experience'
    //     },
    //   }
    // });

    // var codingChart = new Chart(document.getElementById("codingChart"), {
    //   type: 'bar',
    //   data: {
    //     labels: ["Python", "C#", "Javascript", "Terraform", "Docker", "Pack", "GoLang",],
    //     datasets: [{
    //       label: "Professional Years Experience",
    //       backgroundColor: 'rgb(102, 121, 182)',
    //       data: [7, 10, 8, 4, 6, 1, 4]
    //     },
    //     {
    //       label: "Personal Years Experience",
    //       backgroundColor: "rgb(168, 176, 200)",
    //       data: [6, 11, 10, 3, 7, 3, 5]
    //     }]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: 'Code Language Experience'
    //     },
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });
    // var methodChart = new Chart(document.getElementById("methodChart"), {
    //   type: 'bar',
    //   data: {
    //     labels: ["Joint Application Development", "Feature Driven Development", "Agile", "Waterfall/Canban", "Rapid Development", "Devops", "Spiral"],
    //     datasets: [{
    //       label: "Professional Years Experience",
    //       backgroundColor: 'rgb(102, 121, 182)',
    //       data: [5, 5, 4, 8, 6, 8, 3],
    //     }]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: 'Practiced Methodologies'
    //     },
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });
    // var fullStackChart = new Chart(document.getElementById("fullStackChart"), {
    //   type: 'bar',
    //   data: {
    //     labels: ["Front End", "Back End", "Datbase Management", "Verson Control", "Pattern Development", "Solution Architechure"],
    //     datasets: [{
    //       label: "Professional Years Experience",
    //       backgroundColor: 'rgb(102, 121, 182)',
    //       data: [9, 10, 10, 11, 10, 6],
    //     }, {
    //       label: "Personal Years Experience",
    //       backgroundColor: 'rgb(168, 176, 200)',
    //       data: [10, 11, 10, 11, 11, 7],
    //     }]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: 'Full Stack Experience'
    //     },
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });

    // // devopsChart.render();
    // devopsPieChart.render();
    // codingChart.render();
    // methodChart.render();
    // fullStackChart.render();
  });

})();