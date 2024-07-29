# CheckMate: MERN Stack To-Do / Task Management Web Application

## Project Documentation

### Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [System Requirements](#system-requirements)
4. [Technology Stack](#technology-stack)
5. [Project Structure](#project-structure)
6. [Implementation Details](#implementation-details)
    1. [User Authentication](#user-authentication)
    2. [Task Management](#task-management)
    3. [Advanced Filtering](#advanced-filtering)
    4. [Dark and Light Theme](#dark-and-light-theme)
    5. [Drag and Drop](#drag-and-drop)
7. [Setup Instructions](#setup-instructions)
8. [Conclusion](#conclusion)

### Introduction

CheckMate is a robust task management application designed using the MERN stack (MongoDB, Express, React, Node.js). It offers an intuitive interface for users to manage their tasks efficiently with features like advanced filtering, theme customization, and drag-and-drop task reordering.

### Features

1. **User Authentication:**
   - Sign up, Login, and Logout functionality.
   - Password encryption and validation.

2. **Task Management:**
   - Create, Read, Update, Delete (CRUD) operations for tasks.
   - Task categorization (e.g., Work, Personal).
   - Task prioritization.

3. **Advanced Filtering:**
   - Filter tasks by date, priority, category, and status.
   - Search functionality.

4. **Dark and Light Theme:**
   - Toggle between dark and light modes.
   - Persistent theme setting.

5. **Drag and Drop:**
   - Reorder tasks using drag-and-drop.
   - Kanban board-style task management.

6. **Additional Features:**
   - Responsive design.
   - Notifications for task deadlines.
   - User profile management.

### System Requirements

- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm (v6 or higher) or Yarn

### Technology Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router, react-lucide
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **Other Libraries:** Redux (for state management), react-beautiful-dnd (for drag-and-drop functionality)

### Project Structure

```
CheckMate/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── README.md
└── .gitignore
```

### Implementation Details

#### User Authentication

**Backend:**
- Use `bcrypt` to hash passwords before storing them in the database.
- Implement JWT for secure authentication tokens.

**Frontend:**
- Create forms for signup and login.
- Use Context API or Redux to manage authentication state.
- Protect routes using a higher-order component (HOC) or custom hooks.

#### Task Management

**Backend:**
- Create a Task schema in MongoDB with fields such as title, description, category, priority, due date, and status.
- Implement CRUD operations in the task controller.

**Frontend:**
- Create components for displaying tasks, task forms, and task lists.
- Use state management to handle task data and operations.

#### Advanced Filtering

**Frontend:**
- Implement filtering logic using JavaScript.
- Create filter components (e.g., dropdowns, checkboxes) to update the filter state.
- Display filtered tasks based on the selected criteria.

#### Dark and Light Theme

**Frontend:**
- Use Tailwind CSS for styling.
- Create a toggle switch to change themes.
- Store the selected theme in local storage to persist user preference.

#### Drag and Drop

**Frontend:**
- Use `react-beautiful-dnd` for drag-and-drop functionality.
- Implement a Kanban board layout for task organization.
- Update the task order in the state when a task is moved.

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shakilofficial/CheckMate
   cd CheckMate
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   ```

   - Create a `.env` file with the following variables:
     ```env
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     PORT=5000
     ```

   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Setup Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

   - Start the frontend server:
     ```bash
     npm run dev
     ```

4. **Access the application:**
   - Open your browser and go to `http://localhost:3000`.

### Conclusion

CheckMate provides a comprehensive solution for managing tasks efficiently. With its robust features and user-friendly interface, it aims to enhance productivity and task organization for its users. This documentation should guide you through the setup and implementation of the project, ensuring a smooth development experience.
