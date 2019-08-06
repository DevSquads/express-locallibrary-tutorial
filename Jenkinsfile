pipeline {
    agent any
    stages {
        stage('Docker compose Up') {
            steps {
                echo "building the docker compose and initialize the containers "
                sh 'sudo docker-compose build --no-cache'
            }
        }
        stage('Run test') {
            steps {
                sh 'sh ./run-test-container.sh'
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
