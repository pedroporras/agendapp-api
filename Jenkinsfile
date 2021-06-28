pipeline {
  agent {
    dockerfile {
      filename 'build/development.Dockerfile'
    }

  }
  stages {
    stage('Preparing environment') {
      steps {
        echo 'Preparando ambiente'
        echo 'Directorio actual'
        sh 'pwd'
        echo 'Contenido actual'
        sh 'ls -alh'
        echo 'Build actual'
        sh 'ls -alh build'
      }
    }

    stage('Build and test') {
      steps {
        sh 'docker build -f build/development.Dockerfile -t test-image .'
        sh 'docker run --rm -it test-image npm run test'
      }
    }

  }
  post {
    always {
      cleanWs()
    }

  }
}