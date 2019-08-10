node{
    checkout scm

     stage('SonarQube analysis') {
        withSonarQubeEnv('My SonarQube Server') {
            sh 'mvn clean package sonar:sonar'
        } // submitted SonarQube taskId is automatically attached to the pipeline context
  }

    stage("Quality Gate"){
        timeout(time: 5, unit: 'MINUTES') { // Just in case something goes wrong, pipeline will be killed after a timeout
            def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
                if (qg.status != 'OK') {
                error "Pipeline aborted due to quality gate failure: ${qg.status}"
                }
        }
   }
}