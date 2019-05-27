pipeline {
    agent any
    stages {
        stage('Docker compose Up') {
            steps {
                echo "building the docker compose and initialize the containers "
                sh '/usr/local/bin/docker-machine ls'
                sh 'sudo /usr/local/bin/docker-compose up -d'
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
                sh '/usr/local/bin/docker-compose down'
            }
        }
    }
}