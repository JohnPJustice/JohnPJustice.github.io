﻿(function () {
  var jpjapp = angular.module("app", ["ngRoute"]);
  jpjapp.controller("mainController", function ($scope, $http) {
    // Try multiple URL formats, starting with local file
    var gistUrls = [
      "https://gist.githubusercontent.com/JohnPJustice/f33a5916989bbc0639335e4319d0977f/raw"
    ];
    
    var jsonInfo = {};
        
    // Function to try each URL until one works
    function tryFetchData(urlIndex) {
      if (urlIndex >= gistUrls.length) {
        console.error('All data sources failed, using default values');
        setDefaultValues();
        return;
      }
      
      var url = gistUrls[urlIndex];
      
      $http.get(url)
        .then(function(response) {
          jsonInfo = response.data;
          setDataValues(jsonInfo);
        })
        .catch(function(error) {
          console.log('Failed to load from:', url, error);
          tryFetchData(urlIndex + 1);
        });
    }
    
    // Function to set data values
    function setDataValues(data) {
      $scope.mainName = angular.uppercase(data.mainName);
      $scope.mainNameTitle = data.mainName;
      $scope.navAbout = data.navAbout;
      $scope.navContact = data.navContact;
      $scope.navProjects = data.navProjects;
      $scope.navTitle = data.navTitle;
      $scope.aboutMe = data.aboutMe;
      $scope.photoOfMe = data.photoOfMe;
      $scope.mainTitle = data.mainTitle;
      $scope.mainSummary = data.mainSummary;
      $scope.mainContactMe = data.mainContactMe;
      $scope.mainExperience = data.mainExperience;
      $scope.nautilusName = data.nautilusName;
      $scope.nautilusPostition = data.nautilusPostition;
      $scope.nautilusEmpTime = data.nautilusEmpTime;
      $scope.jgName = data.jgName;
      $scope.jgPosition = data.jgPosition;
      $scope.jgEmpTime = data.jgEmpTime;
      $scope.capsaEmpTime = data.capsaEmpTime;
      $scope.integraEmpTime = data.integraEmpTime;
      $scope.engilityEmpTime = data.engilityEmpTime;
      $scope.nautilusSummary1 = data.nautilusSummary1;
      $scope.nautilusSummary2 = data.nautilusSummary2;
      $scope.nautilusSummary3 = data.nautilusSummary3;
      $scope.jgSummary1 = data.jgSummary1;
      $scope.jgSummary2 = data.jgSummary2;
      $scope.jgSummary3 = data.jgSummary3;
      $scope.jgSummary4 = data.jgSummary4;
      $scope.jgSummary5 = data.jgSummary5;
      $scope.jgSummary6 = data.jgSummary6;
      $scope.capsaName = data.capsaName;
      $scope.capsaTitle = data.capsaTitle;
      $scope.capsaSummary1 = data.capsaSummary1;
      $scope.capsaSummary2 = data.capsaSummary2;
      $scope.capsaSummary3 = data.capsaSummary3;
      $scope.integraName = data.integraName;
      $scope.integraTitle = data.integraTitle;
      $scope.integraSummary1 = data.integraSummary1;
      $scope.integraSummary2 = data.integraSummary2;
      $scope.integraSummary3 = data.integraSummary3;
      $scope.engilityName = data.engilityName;
      $scope.engilityTitle = data.engilityTitle;
      $scope.engilitySummary1 = data.engilitySummary1;
      $scope.engilitySummary2 = data.engilitySummary2;
      $scope.engilitySummary3 = data.engilitySummary3;
      $scope.githubLink = data.githubLink;
      $scope.githubTitle = data.githubTitle;
      $scope.linkedInLink = data.linkedInLink;
      $scope.linkedInTitle = data.linkedInTitle;
      $scope.skillSet = data.skillSet;
    }
    
    // Function to set default values
    function setDefaultValues() {
      setDataValues({});
    }
    
    // Start the data fetching process
    tryFetchData(0);

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

    // Get list of modal elements with updated class names
    var modals = document.getElementsByClassName("skills-modal");
    var experienceModals = document.getElementsByClassName("experience-modal");
    
    // Combine all modals into one array
    var allModals = [].slice.call(modals).concat([].slice.call(experienceModals));
    
    // When the user clicks anywhere outside of the modal, close it 
    window.onclick = function(event) {
      for (var modal of allModals) {
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
          backgroundColor:  "#ff6a3d",
          data: [11, 8, 8, 11, 11, 11, 11, 9, 5],
        }]
      },
      options: {
        plugins:{
          legend:{
            labels:{
              font:{
                family: 'Arial'
              },
              color: '#e0e6f7'
            }
          }
        },
        title: {
          display: true,
          text: 'DevOps Skill Experience',
          color: '#e0e6f7'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              color: '#e0e6f7'
            },
            grid: {
              color: '#23263a'
            }
          }],
          xAxes: [{
            ticks: {
              color: '#e0e6f7'
            },
            grid: {
              color: '#23263a'
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
          backgroundColor: '#9daaf2',
          data: [7, 15, 8, 5, 9, 4, 4, 8]
        }]
      },
      options: {
        plugins:{
          legend:{
            labels:{
              font:{
                family: 'consolas'
              },
              color: '#e0e6f7'
            }
          }
        },
        title: {
          display: true,
          text: 'Code Language Experience',
          color: '#e0e6f7'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              color: '#e0e6f7'
            },
            grid: {
              color: '#23263a'
            }
          }],
          xAxes: [{
            ticks: {
              color: '#e0e6f7'
            },
            grid: {
              color: '#23263a'
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
          backgroundColor: "#2d3250",
          data: [7, 10, 3, 2, 7, 3,7,8,3,4,4,3],
        }]
      },
      options: {
        plugins:{
          legend:{
            labels:{
              font:{
                family: 'consolas'
              },
              color: '#e0e6f7'
            }
          }
        },
        title: {
          display: true,
          text: 'Cloud Experience',
          color: '#e0e6f7'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              color: '#e0e6f7'
            },
            grid: {
              color: '#23263a'
            }
          }],
          xAxes: [{
            ticks: {
              color: '#e0e6f7'
            },
            grid: {
              color: '#23263a'
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