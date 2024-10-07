# Task Management Web Application

A simple task management web application that allows users to create, update, view, and delete tasks. The app uses the MERN stack (MongoDB, Express, React, Node.js) and features user authentication.

## Features
- View all tasks
- Add new tasks
- Edit existing tasks
- Delete tasks
- User authentication (register, login, and logout)
- Only authenticated users can manage tasks
- Responsive design for mobile and desktop

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed or use MongoDB Atlas

### Backend Setup
1. Clone the repository
    ```bash
    git clone https://github.com/Kadam-Aditya/task-manager-app.git
    ```
2. Navigate to the backend folder
    ```bash
    cd backend
    ```
3. Install dependencies
    ```bash
    npm install
    ```
4. Set up environment variables in a `.env` file:
    ```
    MONGO_URI=<your-mongo-db-uri>
    JWT_SECRET=<your-secret-key>
    ```
5. Start the server
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend folder
    ```bash
    cd frontend
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Start the frontend development server
    ```bash
    npm start
    ```

Now, you can access the app in your browser at `http://localhost:3000`.

## API Endpoints

### Authentication
1. **Register**
   - **URL**: `/api/auth/register`
   - **Method**: POST
   - **Description**: Registers a new user.
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "token": "jwt-token"
     }
     ```

2. **Login**
   - **URL**: `/api/auth/login`
   - **Method**: POST
   - **Description**: Logs in an existing user.
   - **Request Body**:
     ```json
     {
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "token": "jwt-token"
     }
     ```

### Tasks
1. **Get All Tasks**
   - **URL**: `/api/tasks`
   - **Method**: GET
   - **Description**: Fetches all tasks for the authenticated user.
   - **Headers**: `Authorization: Bearer <token>`
   - **Response**:
     ```json
     [
       {
         "_id": "task_id",
         "title": "Task 1",
         "description": "Task description",
         "status": "pending"
       }
     ]
     ```

2. **Get Task by ID**
   - **URL**: `/api/tasks/:id`
   - **Method**: GET
   - **Description**: Fetch a specific task by its ID.
   - **Headers**: `Authorization: Bearer <token>`
   - **Response**:
     ```json
     {
       "_id": "task_id",
       "title": "Task 1",
       "description": "Task description",
       "status": "pending"
     }
     ```

3. **Create a Task**
   - **URL**: `/api/tasks`
   - **Method**: POST
   - **Description**: Create a new task.
   - **Headers**: `Authorization: Bearer <token>`
   - **Request Body**:
     ```json
     {
       "title": "New Task",
       "description": "Task description",
       "status": "pending"
     }
     ```
   - **Response**:
     ```json
     {
       "_id": "new_task_id",
       "title": "New Task",
       "description": "Task description",
       "status": "pending"
     }
     ```

4. **Update a Task**
   - **URL**: `/api/tasks/:id`
   - **Method**: PUT
   - **Description**: Update an existing task.
   - **Headers**: `Authorization: Bearer <token>`
   - **Request Body**:
     ```json
     {
       "title": "Updated Task",
       "description": "Updated description",
       "status": "completed"
     }
     ```
   - **Response**:
     ```json
     {
       "_id": "task_id",
       "title": "Updated Task",
       "description": "Updated description",
       "status": "completed"
     }
     ```

5. **Delete a Task**
   - **URL**: `/api/tasks/:id`
   - **Method**: DELETE
   - **Description**: Deletes a task by its ID.
   - **Headers**: `Authorization: Bearer <token>`
   - **Response**:
     ```json
     {
       "message": "Task deleted successfully"
     }
     ```

## Authentication
- JWT (JSON Web Token) is used to authenticate users.
- Register a new account using `/api/auth/register` and log in using `/api/auth/login` to receive a token.
- The token must be passed in the `Authorization` header for authenticated routes (e.g., tasks management routes).


## Technologies Used
- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Styling**: Tailwind CSS (or any other CSS framework you’ve used)


## API Documentation

The full API documentation is available in Postman. You can access it by following the link below:

[Task Management API Documentation - Postman](https://www.postman.com)

Alternatively, you can import the Postman collection directly into your Postman workspace using the file provided in this repository.

To import the collection:
1. Download the `TaskManagementAPI.postman_collection.json` file.
2. Open Postman and click the "Import" button.
3. Select the JSON file and import it.


