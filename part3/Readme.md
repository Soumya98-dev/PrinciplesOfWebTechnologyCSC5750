# Web Technology Class Registration System

## Introduction

This project is a web-based class registration system for the Principles of Web Technology class. It allows students to submit their information and select a time slot for their class project.

## Setup

## Prerequisites

**If Node and NPM is not installed**

Before you begin, please ensure you have met the following requirements:
- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm (Node Package Manager): npm is included with Node.js installation.

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/web-tech-class-registration.git
 ```

2. **Navigate to the project folder**
```bash 
cd web-tech-class-registration
```

3. **Install dependencies**
```bash
npm install
```

4. **Database Configuration**
    Set up a MySQL database and configure the connection details in server.js.
    Execute the SQL script provided in db.sql to create the necessary tables

5. **Start the application**
```bash
npm start
```
    OR
```bash
node server.js
```

6. **Access the application**
    Open your browser and navigate to http://localhost:3000

**Usage**
    Access the registration form by visiting the homepage.

    Fill in the required information, including first name, last name, project title, email, phone number, and select a time slot.

    Click the "Submit" button to register.

    To view the list of registered students, navigate to http://localhost:3000/students.

# Dependencies

This project relies on the following dependencies:

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [mysql2](https://www.npmjs.com/package/mysql2): MySQL library for Node.js.
- [ejs](https://www.npmjs.com/package/ejs): Embedded JavaScript templates.

## Installation

To install the dependencies, run the following command:

```bash
npm install
```