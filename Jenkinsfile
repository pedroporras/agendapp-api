node {

    stage('Build') {
        sh "ls -alh"
        sh "pwd"
        def dockerfile = 'build/development.Dockerfile'
        /* def customImage = docker.build("test-image", "${WORKSPACE}/build/development.Dockerfile") */
        def customImage = docker.build("test-image", "-f ${dockerfile} ${WORKSPACE}")
    }
    stage('Test') { 
        // 
    }
    stage('Deploy') { 
        // 
    }
}
