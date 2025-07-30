<<<<<<< HEAD
# devops-assignment
=======
# DevOps Take-Home Assignment

This project demonstrates how to deploy an ASP.NET Core Web API to AWS using Infrastructure as Code (CDK), containerization (Docker), and CI/CD (GitHub Actions).

---

## 📦 Project Structure

- `src/DevOpsApp/` — Minimal ASP.NET Core Web API project
- `lib/` — AWS CDK infrastructure (VPC, ECS Fargate, ALB, Logs)
- `.github/workflows/` — CI/CD pipeline using GitHub Actions
- `Dockerfile` — Container image for the .NET application

---

## 🚀 How to Run Locally

Make sure you have .NET SDK 8.0 installed:

```bash
cd src/DevOpsApp
dotnet restore
dotnet run
>>>>>>> 21b95ce (Initial commit - test)
