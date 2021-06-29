pipeline {
    agent {
        dockerfile{
            filename 'build/development.Dockerfile'
            dir '.'
        }
    }
    stages {
        stage('Preparing environment') {
            steps {
                sh 'node --version'
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
                sh 'npm test'
            }
        }
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
