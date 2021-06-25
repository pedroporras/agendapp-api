node {
    checkout scm

    def customImage = docker.build("test-image", "./build/development.Dockerfile")

    customImage.inside {
        sh 'node --version'
        sh 'make test'
    }
}
