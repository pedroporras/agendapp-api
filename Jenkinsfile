pipeline {
    agent {
        dockerfile{
            filename 'build/development.Dockerfile'
            dir '.'
            //label 'test-image'
            //additionalBuildArgs  '--build-arg version=1.0.2'
            //args '-v /tmp:/tmp'
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
                //sh 'docker build -f build/development.Dockerfile -t test-image .'
                //sh 'docker run --rm -it test-image npm run test'
                sh 'npm run test'
            }
        }
    }
    post { 
        always { 
            cleanWs()
        }
    }
}

/* node {

    stage('Build') { 
        def dockerfile = 'build/development.Dockerfile'

        def customImage = docker.build("test-image", "-f ${dockerfile} ${WORKSPACE}")
    }
    stage('Test') { 

    }
    stage('Deploy') { 
    
    }
} */