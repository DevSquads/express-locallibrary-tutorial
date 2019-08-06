pipeline {
    agent any
    stages {
        stage('Docker compose down and build') {
            steps {
                echo "building the docker compose and initialize the containers "
                sh 'sudo docker-compose down -v'
                sh 'sudo docker-compose build --no-cache'
            }
        }
        stage('Run test') {
            steps {
                sh 'sudo docker-compose up'
            }
        }
        stage('Reports') {
            steps {
                junit 'reports/junit.xml'
            }
        }
    }
    post {
        always {
            echo "clean the docker compose containers"
            sh 'sudo docker-compose down'
        }
    }
}
