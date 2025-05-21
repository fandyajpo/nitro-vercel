pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/fandyajpo/nitro-vercel.git'
            }
        }

        stage('Installment') {
            steps {
                sh 'bun install'
            }
        }
    }
}