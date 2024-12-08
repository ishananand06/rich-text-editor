# Project Name: **Rich Text Editor with Flask and MySQL**

## Description

This project features a **Rich Text Editor** built using **React**, **TipTap**, and **Bootstrap**. The editor includes common rich text formatting options such as bold, italic, underline, strike-through, text alignment, font size, color, and image insertion. The app uses **Flask** and **MySQL** to handle the back-end operations, specifically creating a user management system to insert and retrieve user data from the database.

### Features

- Rich Text Formatting (Bold, Italic, Underline, Strike-through)
- Text Alignment (Left, Center, Right, Justify)
- Font Customization (Font Family, Font Size, Font Color)
- Image Insertion
- Link Insertion
- Undo and Redo functionality
- MySQL Database Integration via Flask API

## Technologies Used

- **Frontend**: 
  - React
  - TipTap (for rich text editing)
  - Bootstrap (for responsive design)
  
- **Backend**:
  - Flask (Python web framework)
  - MySQL (Database)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ishananand06/rich-text-editor.git
   cd project-name
   ```

2. **Set up the Frontend (React)**

   Navigate to the frontend folder and install dependencies:

   ```bash
   cd RTE
   npm install
   ```

3. **Set up the Backend (Flask)**

   Navigate to the backend folder and install Python dependencies:

   ```bash
   cd backend
   pip install 
   ```

4. **Set up MySQL**

   Ensure MySQL is installed and running. Use the following commands to set up the database:

   ```sql
   CREATE DATABASE my_project;
   ```

   The Flask app will use the `my_project` database.

5. **Running the Backend**

   Start the Flask server:

   ```bash
   python app.py
   ```

6. **Running the Frontend**

   In the frontend folder, start the React development server:

   ```bash
   npm start
   ```

### Database Configuration

In the Flask app, the database connection settings are configured in the following block:

```python
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="pass",
        database="my_project"
    )
```

Make sure the database credentials are correct for your local environment.

### Folder Structure

```bash
├── RTE/                   # React application (Frontend)
│   ├── src/               # React source files
│   └── public/            # Public assets
├── backend/               # Flask application (Backend)
│   ├── app.py             # Main Flask application
└── README.md              # Project README
```
