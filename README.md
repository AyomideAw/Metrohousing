# MetroHousing

MetroHousing is a full-stack data-driven application designed to visualize and deliver up-to-date employment and housing development information across the Toronto-Hamilton corridor. Built with a modern architecture and CI/CD pipeline, this platform serves policymakers, developers, and urban planners who rely on accurate data for impactful decision-making.

# 📦 Tech Stack

Frontend: React.js

Backend: Spring Boot (Java)

Database: MySQLData 

Ingestion: Python

Containerization: Docker, Docker Compose

CI/CD: GitLab CI/CD with SonarQube for code quality

# 🚀 Features

📊 Real-time visualization of employment & housing trends in Toronto-Hamilton

🏗️ Tracks unemployment rates, participation rates, housing starts & completions

📥 Python-based data ingestion pipeline with scheduled updates

🧪 Linting and testing via GitLab pipelines

📦 Fully containerized setup with isolated services for backend, frontend, database, and ingester

# 🛠️ Local Development Setup

# Prerequisites:
Docker & Docker Compose installe
Node.js & npm (for local frontend dev)

1. Clone the repository
git clone https://github.com/AyomideAw/Metrohousing.git
cd metrohousing

2. Build and Run with Docker Compose
docker compose build
docker compose up -d

3. Access Services:
Frontend: http://localhost:3000
Backend API: http://localhost:8080/api

# 🧪 Code Quality & CI/CD

GitLab CI/CD is configured for linting and static analysis:
- Backend lint: Gradle check
- Frontend lint: ESLint
- Python linter: Pylint
- Code quality reports: SonarQube integration per service
- To run pipelines, simply push changes to main or run manually in GitLab.

# 🗃️ Folder Structure

├── backend                # Spring Boot app

├── data_ingester         # Python data ingestion scripts

├── frontend              # React frontend

├── output                # Output directory for ingested data

├── compose.yaml          # Docker Compose config

├── .gitlab-ci.yml        # CI/CD config

└── README.md             # Project overview

# ✨ Contributions

Open to collaboration! If you’d like to contribute, please fork the repo and create a PR.

# 🙌 Acknowledgements

City of Toronto & Hamilton Open Data Portals

University of Guelph, CIS3760 Sheltrix Project Team

📄 License
MIT License. See LICENSE file for details.
