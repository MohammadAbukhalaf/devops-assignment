# DevOps Assignment – Mohammad AbuKhalaf

This project demonstrates deploying a minimal ASP.NET Core Web API application to AWS using Docker, AWS CDK (TypeScript), ECS Fargate, and GitHub Actions for CI/CD.

---

## 🚀 How to Run the App Locally

1. Make sure you have the .NET SDK installed (version 8.0):

   ```bash
   dotnet --version

Navigate to the app directory:

   cd src/DevOpsApp

Restore dependencies and run the app:

   dotnet restore
   dotnet run

The API will be available at:

    http://localhost:5000

☁️ How to Deploy the Infrastructure (Using AWS CDK)
Install Node.js dependencies:

     npm install

Build the CDK project:

     npm run build

(Only the first time) Bootstrap your AWS CDK environment:

     cdk bootstrap

Deploy the infrastructure:

    cdk deploy
```
