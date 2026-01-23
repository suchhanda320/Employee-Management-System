# Employee Management System (EMS)

A full-stack web application for managing employee records, built with Spring Boot backend and React frontend.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, and Delete employee records
- **RESTful API**: Clean REST API endpoints for employee management
- **Modern UI**: Responsive React interface with Bootstrap styling
- **Database Integration**: MySQL database with JPA/Hibernate
- **Cross-Origin Support**: CORS enabled for frontend-backend communication

## 🛠️ Tech Stack

### Backend
- **Java 17**
- **Spring Boot 4.0.1**
- **Spring Data JPA**
- **MySQL Database**
- **Maven** (Build tool)
- **Lombok** (Code generation)

### Frontend
- **React 19**
- **Vite** (Build tool)
- **Axios** (HTTP client)
- **React Router DOM** (Routing)
- **Bootstrap 5** (UI framework)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Java 17** or higher
- **Node.js** (v16 or higher) and npm
- **MySQL Server**
- **Maven** (usually comes with Spring Boot)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd full-stack
```

### 2. Database Setup
1. Install and start MySQL Server
2. Create a database named `ems`:
```sql
CREATE DATABASE ems;
```
3. Update database credentials in `ems-backend/src/main/resources/application.properties` if needed:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=your_password
```

### 3. Backend Setup
```bash
cd ems-backend
# Build the project
./mvnw clean install
# Run the application
./mvnw spring-boot:run
```

The backend will start on `http://localhost:8080`

### 4. Frontend Setup
```bash
cd ems-frontend
# Install dependencies
npm install
# Start development server
npm run dev
```

The frontend will start on `http://localhost:5173`

## 🚀 Running the Application

1. **Start Backend**: Ensure the Spring Boot application is running on port 8080
2. **Start Frontend**: Run `npm run dev` in the frontend directory
3. **Access Application**: Open `http://localhost:5173` in your browser

## 📡 API Endpoints

The REST API provides the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/employees` | Get all employees |
| `GET` | `/api/employees/{id}` | Get employee by ID |
| `POST` | `/api/employees` | Create new employee |
| `PUT` | `/api/employees/{id}` | Update employee |
| `DELETE` | `/api/employees/{id}` | Delete employee |

### Sample API Usage

**Create Employee:**
```bash
curl -X POST http://localhost:8080/api/employees \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }'
```

**Get All Employees:**
```bash
curl http://localhost:8080/api/employees
```

## 📁 Project Structure

```
full-stack/
├── ems-backend/                 # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/net/javaguides/ems/
│   │   │   │   ├── controller/     # REST controllers
│   │   │   │   ├── dto/           # Data Transfer Objects
│   │   │   │   ├── entity/        # JPA entities
│   │   │   │   ├── exception/     # Custom exceptions
│   │   │   │   ├── mapper/        # Entity-DTO mappers
│   │   │   │   ├── repository/    # JPA repositories
│   │   │   │   ├── service/       # Business logic
│   │   │   │   └── EmsBackendApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/                 # Unit tests
│   └── pom.xml                   # Maven configuration
└── ems-frontend/                 # React frontend
    ├── public/                   # Static assets
    ├── src/
    │   ├── components/           # React components
    │   ├── services/             # API service layer
    │   └── App.jsx               # Main app component
    ├── package.json              # NPM configuration
    └── vite.config.js            # Vite configuration
```

## 🧪 Testing

### Backend Tests
```bash
cd ems-backend
./mvnw test
```

### Frontend Tests
```bash
cd ems-frontend
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For questions or support, please open an issue in this repository.

---

**Note**: Make sure to update the database credentials in `application.properties` before running the application.</content>
<parameter name="filePath">c:\Users\PC\Desktop\full-stack\README.md