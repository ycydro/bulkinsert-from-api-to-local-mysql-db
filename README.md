## Prerequisites

- Node.js v22.16.0 (and above)
- Laragon / XAMPP
- Git

## Setup and Installation

1. **Start Your Local Server**

   Open Laragon or XAMPP

   Start Apache and MySQL

2. **Create a Database**

   Create a new MySQL database (phpMyAdmin):

   Database name: (e.g., new_db)

3. **Clone the repository**:

   ```
   git clone https://github.com/ycydro/bulkinsert-from-api-to-local-mysql-db.git .
   ```

4. **Install required packages**:

   ```
   npm install
   ```

5. **Setup Environtment Variables** (recommended):

   Create a .env file in the backend directory with the following content:

   ```
   DB_HOST=your_host
   DB_NAME=your_db
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   API_URL=your_api_url (optional)
   ```

   Replace the values with your actual database credentials and settings.

6. **Create Model**:

   ```
   Create a new Model in the models folder:

   const newModel = sequelize.define("model_name", {
    ...columns
   })
   ```

7. **Prepare parameters**:

   ```
   In index.js -

   Add a new line:
   sync(YOUR_API_URL, YOUR_NEW_MODEL, FIELD_MAP)
   ```

8. **Start**:
   ```
   node index.js
   ```
