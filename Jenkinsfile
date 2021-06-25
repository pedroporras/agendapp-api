node {
    checkout scm

    def dockerfile = 'development.Dockerfile'
    /* def customImage = docker.build("test-image", "${WORKSPACE}/build/development.Dockerfile") */
    def customImage = docker.build("test-image", "-f ${dockerfile} ${WORKSPACE}/build")

    customImage.inside {
        sh 'node --version'
        sh 'make test'
    }
}
