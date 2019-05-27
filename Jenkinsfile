pipeline {
    agent any
    stages {
        stage('Docker compose Up') {
            steps {
                echo "building the docker compose and initialize the containers "
                sh 'which docker-compose'
                sh 'docker-compose up -d'
            }
        }
        stage('waiting ') {
            steps {
               sleep 150
            }
        }
         stage('Docker compose teardown') {
            steps {
                echo "clean the docker compose containers"
                sh 'docker-compose down'
            }
        }
    }
}