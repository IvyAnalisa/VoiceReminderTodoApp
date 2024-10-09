

# Voice Reminder Todo App

## Overview

The Voice Reminder Todo App is a web application designed to help users manage their to-do lists with voice reminders. This repository contains the source code for the application, along with a CI/CD pipeline that automates the build, test, and deployment processes using GitHub Actions, Docker, and Azure.

## Features

- Manage tasks with an intuitive user interface.
- Set voice reminders for tasks.
- Responsive design for use on various devices.
- CI/CD pipeline for automated testing and deployment.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: Local Storage
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Deployment**: Azure App Services

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository:
   
   git clone git clone https://github.com/IvyAnalisa/VoiceReminderTodoApp.git
   cd VoiceReminderTodoApp
2. Install dependencies for frontend and backend:

cd todo-frontend
npm install
cd ../todo-backend
npm install
Start the application:

# For the backend
npm start
# For the frontend
cd ../todo-frontend
npm start
 # CI/CD Pipeline
The CI/CD process is managed with GitHub Actions. Key steps include:

Build: Check out code, install dependencies, and build the app.
Artifact Creation: Zip the application for deployment.
Deployment: Deploy to Azure Web App.
Configuration is in .github/workflows/cicd.yml.

# Dockerization
The app is containerized using Docker, with separate Dockerfiles for the frontend and backend.

# Deployment to Azure
Deploy the application to Azure App Services:

Create an Azure App Service.
Set environment variables in Azure.
Configure the GitHub Actions workflow for automatic deployment.
# Contributing
Contributions are welcome! Open an issue or submit a pull request for suggestions or improvements.




