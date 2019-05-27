pipeline {
    agent any
    stages {
        stage('Docker compose Up') {
            steps {
                echo "building the docker compose and initialize the containers "
                sh '/usr/local/bin/docker-compose'
            }
        }
    }
}