node {

    stage('Build') {
        sh "ls -alh"
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
