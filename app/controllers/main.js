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

    // // Get list of collapsible elements
    // var colls = document.getElementsByClassName("collapsible");
    // // Close all collapsible elements
    // function closeAll() {
    //   for (var col of colls) {
    //     col.classList.remove("active");
    //     var content = col.nextElementSibling;
    //     content.style.display = "none";
    //   }
    // }
    // // Add click event to each collapsible element
    // for (var col of colls) {
    //   col.addEventListener("click", function() {
    //     if (this.classList.contains("active")) {
    //       // Close active collapsible elements
    //       this.classList.remove("active");
    //       this.nextElementSibling.style.display = "none";
    //     } else {
    //       // Close all collapsible elements
    //       closeAll();
    //       // Open this collapsible element
    //       this.classList.add("active");
    //       this.nextElementSibling.style.display = "block";
    //     }
    //   });
    // }

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
    

    // var coll = document.getElementsByClassName("collapsible");
    // var i;

    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var content = this.nextElementSibling;
    //     if (content.style.display === "block") {
    //       content.style.display = "none";
    //     } else {
    //       content.style.display = "block";
    //     }
    //   });
    // }

    var devopsChart = new Chart(document.getElementById("devopsChart"), {
      type: 'bar',
      data: {
        labels: ["Testing/Automated Test", "Monitoring/Logging", "Distributed Computing", "Automation/Tooling", "Databases", "Cloud Security", "CICD", "Linux Systems", "AI/ML"],
        datasets: [{
          label: "Professional Years Experience",
          backgroundColor:  "green",
          data: [11, 8, 8, 11, 11, 11, 11, 9, 5],
        }]
      },
      options: {
        title: {
          display: true,
          text: 'DevOps Skill Experience'
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

    var codingChart = new Chart(document.getElementById("codingChart"), {
      type: 'bar',
      data: {
        labels: ["Python", "C#", "Javascript", "GoLang","SQL", "NRQL", "Bash", "Powershell"],
        datasets: [{
          label: "Professional Years Experience",
          backgroundColor: 'green',
          data: [7, 15, 8, 5, 9, 4, 4, 8]
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
    var cloudChart = new Chart(document.getElementById("cloudChart"), {
      type: 'bar',
      data: {
        labels: ["AWS", "Azure", "Google", "VMWare", "Kubernetes", "Jenkins", "Terraform", "Docker", "Packer", "Ansible", "Puppet", "Chef"],
        datasets: [{
          label: "Professional Years Experience",
          backgroundColor: "green",
          data: [7, 10, 3, 2, 7, 3,7,8,3,4,4,3],
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
    cloudChart.render();
    codingChart.render();
  });
})();